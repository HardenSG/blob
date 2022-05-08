<template>
    <div class="container">
        <HeaderNav></HeaderNav>
        <SideTool></SideTool>
        <section>
            <transition 
                name="animate__animated animate__bounce"
                appear
                enter-active-class="animate__slideInUp"
                leave-active-class="animate__slideInDown"
            >
                <router-view></router-view>
            </transition>
        </section>
    </div>
</template>

<script>
import HeaderNav from "@/components/HeaderNav"
import SideTool from "@/components/SideTool"

export default {
    name:'MainBody',
    components:{
        HeaderNav,
        SideTool
    },
    mounted(){
        // console.log(this.$router);
    }
}
</script>

<style lang="less" scoped>
    .container{
        position: relative;
        width: 900px;
        height: auto;
        margin: 0 auto;
        // .goTop{
        //     width: 40px;
        //     height: 40px;
        //     position: fixed;
        //     margin-top: 300px;
        //     margin-left: 1000px;
        //     cursor: pointer;
        //     border-radius: 3px;
        //     transition: .3s;    
        //     text-align: center;
        //     line-height: 40px;
        //     &:hover{
        //         background-color: rgb(72, 69, 69);
        //     }
        // }
        // .tool{
        //     width: 40px;
        //     height: 40px;
        //     position: fixed;
        //     margin-top: 350px;
        //     margin-left: 1000px;
        //     cursor: pointer;
        //     border-radius: 3px;
        //     transition: .3s;    
        //     text-align: center;
        //     line-height: 40px;
        //     &:hover{
        //         background-color: rgb(72, 69, 69);
        //     }
        // }
    }
    section{
        margin-top: 30px;
    }
</style>