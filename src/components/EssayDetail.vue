<template>
    <section v-show="content">
        <span class="iconfont" title="返回" @click="returnLastPage">
            &#xe6ff;
        </span>
        <h2>
            {{param.name}}
        </h2>
        <p v-html="content"></p>
        <img src="http://36.133.40.168:8083/uploadImg/img/wx.jpg"/>
        <img src="http://36.133.40.168:8083/uploadImg/img/wx.jpg"/>
        <img src="http://36.133.40.168:8083/uploadImg/img/wx.jpg"/>
    </section>
    
</template>

<script>
import { computed , onMounted, reactive, ref } from '@vue/runtime-core'
import { useRouter } from 'vue-router'
import axios from 'axios'
export default {
    name:'EssayDetail',
    components:{
    },
    setup(){
        const router = useRouter( )

        console.log(router.currentRoute.value.query);

        let param = reactive(router.currentRoute.value.query)

        // 返回上一个页面
        function returnLastPage(){
            router.go(-1)
        }

        let content = ref( " 服了 " )

        return {
            param,  
            returnLastPage ,
            content ,
        }
    },
        
}
</script>

<style lang="less" scoped>
section{
    width: 100%;
    height: auto;
    padding: 40px 30px;
    opacity: .9;
    box-shadow: 0 0 10px rgb(90, 88, 88);
    border: 2px solid rgb(33, 33, 33);
    border-radius: 10px;
    color: var(--dark-mode-text-color,black);

    transition: .4s;
    .iconfont{
        color: black !important;
        cursor: pointer;
    }
    img{
        width: 85%;
        // height: 400px;
        margin-top: 10px;
        margin-bottom: 1-px;
    }
}
</style>