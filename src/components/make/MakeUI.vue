<template>
  <h2>
      白天模式图片<input type="text" v-model="light"><br><br>
      黑暗模式图片<input type="text" v-model="dark"><br><br>
      个人介绍<input type="text" v-model="introduce"><br><br>
      官微地址<input type="text" v-model="location"><br><br>
      标题名称<input type="text" v-model="title"><br><br>
      座右铭<input type="text" v-model="word"><br><br>
      <button @click="submit">
          提交信息
      </button>
  </h2>
</template>

<script lang="ts">
import { ref } from '@vue/reactivity'
import request from '@/utils/request'
export default {
    name:'MakeUI',
    setup ( ) {
        let light = ref('')
        let dark = ref('')
        let introduce = ref('')
        let location = ref('')
        let title = ref('')
        let word = ref('')

        function submit ( ) {
            new request("http://localhost:8082/makeui",{
                light:light.value,
                dark:dark.value,
                introduce:introduce.value,
                location:location.value,
                title:title.value,
                word:word.value
            },false).post().then( res => {
                console.log(res);
                
            } )
        }


        return{
            light,
            dark,
            introduce,
            location,
            title,
            word,
            submit
        }
    }
}
</script>

<style>

</style>