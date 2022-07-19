<template>
    <span class="goTop iconfont icon-xiangshangjiantoucuxiao" @click="goToTop">
    </span>
    <span class="leftSilde goTop iconfont icon-shejimulu" @click="$store.state.leftShow = !$store.state.leftShow">
    </span>
</template>

<script>
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

            },30)
        }

        return {
            goToTop
        }
    },
    // 自动明暗切换根据时间进行切换
    // 但是由于目前的主题并不鲜明，所以暂不开启这个功能
    // created(){
    //     if (new Date().getHours() >= 19) {
    //         document.querySelector('body').classList.add('dark-mode')
    //         this.isMornShow = !this.isMornShow
    //         this.isSunShow = !this.isSunShow
    //     }
    // }
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