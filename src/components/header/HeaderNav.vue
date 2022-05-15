<template>
    <div class="header">
        <img :src="$store.state.headerAdv" class="headerAdv" :title="$store.state.admin" @click="GoToMyHome">
        <h2>欢迎加入个人博客后台！</h2>
        <UtilsCom class="tool"></UtilsCom>
    </div>
    
</template>

<script lang="ts">
import UtilsCom from "../utils/UtilsCom.vue"
export default {
    components:{
        UtilsCom
    },
    setup(props) {

      function GoToMyHome() {
          console.log('1111');
          
      }  

      return {
          GoToMyHome
      }
    }
}
</script>

<style lang="less" scoped>
    .header{
        position: relative;
        display: flex;
        width: 100%;
        height: 100%;
        padding-right: 20px;
        background-color: rgb(138, 119, 119);
        align-items: center;
        justify-content: center;
        .tool{
            position: absolute;
            right: 0;
        }
        .headerAdv{
            position: absolute;
            left: 10px;
            width: 50px;
            height: 50px;
            border-radius:15px ;
        }
    }
</style>