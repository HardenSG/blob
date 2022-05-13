<template>
    <div class="common-layout">
        <el-container>
        <el-aside width="200px">
            <transition
                name="animate__animated animate__bounce"
                appear
                enter-active-class="animate__slideInDown"
                leave-active-class="animate__slideOutDown"
            >
                <leftslide></leftslide>
            </transition>
        </el-aside>
        <el-container>
            <el-header>
                <HeaderNav></HeaderNav>
            </el-header>
            <el-main>
                <router-view></router-view>
            </el-main>
        </el-container>
        </el-container>
    </div>
</template>

<script lang="ts">
import { defineAsyncComponent } from 'vue'
const leftslide = defineAsyncComponent(() => import("@/components/LeftSilde.vue"))
import HeaderNav from '@/components/HeaderNav.vue'
export default {
    name:'MainCom',
    components:{
        leftslide,
        HeaderNav
    },

}
</script>

<style lang="less" scoped>
.el-header{
    padding: 0 !important;
}
</style>