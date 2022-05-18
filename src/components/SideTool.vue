<template>
    <span class="goTop iconfont" @click="goToTop">
        &#xe8d8;
    </span>
    <span class="leftSilde goTop iconfont" @click="$store.state.leftShow = !$store.state.leftShow">
        &#xe614;
    </span>
</template>

<script>
import {  ref } from 'vue'
import axios from 'axios'
export default {
    name:'SideTool',
    setup(){


        function goToTop(){
            let step;
            let timer = setInterval(()=>{

                if (!document.documentElement.scrollTop) {
                    clearInterval(timer)
                    return
                }
                
                step = Math.ceil(document.documentElement.scrollTop / 5)
                
                document.documentElement.scrollTop -= step

            },50)
        }

        return {
            goToTop
        }
    },
    created(){
        if (new Date().getHours() >= 19) {
            document.querySelector('body').classList.add('dark-mode')
            this.isMornShow = !this.isMornShow
            this.isSunShow = !this.isSunShow
        }
    }
}
</script>

<style lang="less" scoped>
.goTop{
    width: 40px;
    height: 40px;
    position: fixed;
    margin-top: 300px;
    margin-left: 1100px;
    cursor: pointer;
    border-radius: 3px;
    transition: .4s;    
    text-align: center;
    line-height: 40px;
    &:hover{
        background-color: rgb(72, 69, 69);
    }
}
.leftSilde{
    margin-top: 350px !important;
    font-size: 14px !important;
}


</style>