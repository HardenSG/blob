<template>
    <div class="container">
        <HeaderNav></HeaderNav>
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
import HeaderNav from "@/components/HeaderNav"
export default {
    name:'MainBody',
    components:{
        HeaderNav,
    },
    mounted(){
        // console.log(this.$router);
    }
}
</script>

<style lang="less" scoped>
    .container{
        width: 1200px;
        height: auto;
        margin: 0 auto;
    }
    section{
        margin-top: 30px;
    }
</style>