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
          <span @click="GoToIndex">
            主页
          </span>
        </el-menu-item>
        <el-sub-menu index="2">
          <template #title>
            <!-- <el-icon><Location /></el-icon> -->
            <span>博客管理</span>
          </template>
          <el-menu-item-group title="blog">
            <el-menu-item index="1-1" @click="GoToManagePublish">发表博客</el-menu-item>
            <el-menu-item index="1-2" @click="GoToManageHistory">查看历史博客</el-menu-item>
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
          <!-- <el-icon><icon-menu /></el-icon> -->
          <el-icon><AddLocation /></el-icon>
          <span @click="GoToMake">自定义</span>
        </el-menu-item>
        <el-menu-item index="4">
          <!-- <el-icon><setting /></el-icon> -->
          <span>Navigator Four</span>
        </el-menu-item>
      </el-menu>
    </el-col>
</template>

<script lang="ts">
import { onMounted } from '@vue/runtime-core'

// import {
//   Document,
//   Menu as IconMenu,
//   Location,
//   Setting,
// } from '@element-plus/icons-vue'    
import { useRoute, useRouter } from 'vue-router'

export default {
  name:'LeftSlide',
  setup(){
    const router = useRouter()
    const handleOpen = (key: string, keyPath: string[]) => {
      console.log(key, keyPath)
    }
    const handleClose = (key: string, keyPath: string[]) => {
      console.log(key, keyPath)
    } 
    
    //goto index
    function GoToIndex ( ) {
      router.push({
        path:'/'
      })
    }

    function GoToManagePublish ( ) {
      router.push({
        path:'/manage/publish/18',
        params:{
          pages:'publish',
          id:18
        }
      })
    }
    function GoToManageHistory ( ) {
      router.push({
        path:'/manage/history/12',
        params:{
          pages:'history',
          id:18
        }
      })
    }
    function GoToMake ( ) {
      router.push({
        path:'/makeui'
      })
    }



    return {
      router,
      handleOpen,
      handleClose,
      GoToIndex,
      GoToManagePublish,
      GoToManageHistory,
      GoToMake
    }
  },
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
