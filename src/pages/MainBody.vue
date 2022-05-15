<template>
    <div class="container">
        <HeaderNav></HeaderNav>
        <SideTool></SideTool>
        <section>
            <transition
                name="animate__animated animate__bounce"
                appear
                enter-active-class="animate__slideInUp"
                leave-active-class="animate__slideOutUp"
            >
                <router-view></router-view>
            </transition>
        </section>
    </div>
</template>

<script>
import "animate.css"
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
    }
    section{
        margin-top: 30px;
    }
</style>