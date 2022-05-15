<template>
    <div class="common-layout">
        <el-container>
        <el-aside width="200px">
            <transition
                name="animate__animated animate__bounce"
                appear
                enter-active-class="animate__slideInLeft"
            >
                <LeftSildeVue></LeftSildeVue>
            </transition>
        </el-aside>
        <el-container>
            <el-header>
                <transition
                    name="animate__animated animate__bounce"
                    appear
                    enter-active-class="animate__slideInDown"
                >
                    <HeaderNav></HeaderNav>
                </transition>
            </el-header>
            <el-main>
                <transition
                    name="animate__animated animate__bounce"
                    appear
                    enter-active-class="animate__zoomIn"
                >
                    <router-view></router-view>
                </transition>
            </el-main>
        </el-container>
        </el-container>
    </div>
</template>

<script lang="ts">
// import { defineAsyncComponent } from 'vue'
import LeftSildeVue from '@/components/leftslide/LeftSilde.vue'
import HeaderNav from '@/components/header/HeaderNav.vue'
export default {   
    name:'MainCom',
    components:{
        LeftSildeVue,
        HeaderNav
    },

}
</script>

<style lang="less" scoped>
.el-header{
    padding: 0 !important;
}
</style>