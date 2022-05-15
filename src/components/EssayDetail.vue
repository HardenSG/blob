<template>
    <section v-show="content">
        <span class="iconfont" title="返回" @click="returnLastPage">
            &#xe6ff;
        </span>
        <h2>
            {{param.name}}
        </h2>
        <p v-html="content"></p>
        <p v-html="content"></p>
        <p v-html="content"></p>
        <p v-html="content"></p>
        <p v-html="content"></p>
        <p v-html="content"></p>
        <p v-html="content"></p>
        <p v-html="content"></p>
        <p v-html="content"></p>
        <p v-html="content"></p>
        <p v-html="content"></p>
        <p v-html="content"></p>
        <p v-html="content"></p>
        <p v-html="content"></p>
        <p v-html="content"></p>
        <p v-html="content"></p>
        <p v-html="content"></p>
        <p v-html="content"></p>
        <p v-html="content"></p>
        <p v-html="content"></p>
        <p v-html="content"></p>
        <p v-html="content"></p>
        <p v-html="content"></p>
        <p v-html="content"></p>
        <p v-html="content"></p>
        <p v-html="content"></p>
        <p v-html="content"></p>
        <p v-html="content"></p>
        <p v-html="content"></p>
        <p v-html="content"></p>
        <p v-html="content"></p>
        <p v-html="content"></p>
        <p v-html="content"></p>
        <p v-html="content"></p>
        <p v-html="content"></p>
        <p v-html="content"></p>
        <p v-html="content"></p>
        <p v-html="content"></p>
        <p v-html="content"></p>
        <p v-html="content"></p>
        <p v-html="content"></p>
        <p v-html="content"></p>
    </section>
</template>

<script>
import { computed, getCurrentInstance, reactive, ref } from '@vue/runtime-core'
import markdown from 'markdown-it'
import axios from 'axios'
export default {
    name:'EssayDetail',
    setup(){
        const { proxy } = getCurrentInstance()

        let param = reactive(proxy.$router.currentRoute.value.query)

        let tempContent = ref('')

        // 返回上一个页面
        function returnLastPage(){
            proxy.$router.go(-1)
        }

        let content = computed(()=>{
            const md = new markdown()
            const temp = md.render(proxy.tempContent)
            return temp
        })

        return {
            param,  
            returnLastPage  ,
            content ,
            tempContent
        }
    },
    created() {
        axios({
            url:'http://localhost:8082/api/getDetail',
            method:'GET',
            params:{
                id:4
            }
        }).then(res=>{
            this.tempContent = res.data.result.pubMessage
        })
        
    },
}
</script>

<style lang="less" scoped>
section{
    width: 100%;
    height: auto;
    padding: 40px 30px;
    background-color:var(--dark-mode-bg, white);
    opacity: .7;
    border-radius: 10px;
    color: var(--dark-mode-text-color,black);
    h2{
        color: var(--dark-mode-text-color,black);
    }
    .iconfont{
        color: black !important;
        cursor: pointer;
    }
}
</style>