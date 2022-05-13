<template>
    <el-col :span="24" class="tac">
      <h5 class="mb-1">
        <img src="http://36.133.40.168:8083/email.png"/>
      </h5>
      <el-menu
        active-text-color="#ffd04b"
        background-color="#545c64"
        class="el-menu-vertical-demo"
        default-active="1"
        text-color="#fff"
        @open="handleOpen"
        @close="handleClose"
      >
        <el-menu-item index="1">
          <el-icon><icon-menu /></el-icon>
          <span>
            <router-link to="index">主页</router-link>
          </span>
        </el-menu-item>
        <el-sub-menu index="2">
          <template #title>
            <el-icon><Location /></el-icon>
            <span>博客管理</span>
          </template>
          <el-menu-item-group title="blog">
            <el-menu-item index="1-1">发表博客</el-menu-item>
            <el-menu-item index="1-2">查看历史博客</el-menu-item>
          </el-menu-item-group>
          <!-- <el-menu-item-group title="Group Two">
            <el-menu-item index="1-3">item three</el-menu-item>
          </el-menu-item-group> -->
          <!-- <el-sub-menu index="1-4">
            <template #title>item four</template>
            <el-menu-item index="1-4-1">item one</el-menu-item>
          </el-sub-menu> -->
        </el-sub-menu>
        <el-menu-item index="3">
          <el-icon><icon-menu /></el-icon>
          <span>查看用户数量</span>
        </el-menu-item>
        <el-menu-item index="4">
          <el-icon><setting /></el-icon>
          <span>Navigator Four</span>
        </el-menu-item>
      </el-menu>
    </el-col>
</template>

<script lang="ts">

import {
  Document,
  Menu as IconMenu,
  Location,
  Setting,
} from '@element-plus/icons-vue'    

export default {
  name:'LeftSlide',
  setup(){
    const handleOpen = (key: string, keyPath: string[]) => {
      console.log(key, keyPath)
    }
    const handleClose = (key: string, keyPath: string[]) => {
      console.log(key, keyPath)
    } 
    return {
      handleOpen,
      handleClose
    }
  }
}




</script>
<style scoped lang="less">
 .tac{
    width: 100%;
    height: 100vh;
    background-color:#545c64;
    overflow-x: hidden;
    .mb-1 img{
      width: 100%;
      height: 60px;
    }
    .el-menu-vertical-demo{
      width: 101%;
    }
  }
  a{
    text-decoration: none;
    color: white;
  }
</style>
