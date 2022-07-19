<template>
  <div class="common-layout">
    <el-container>
      <el-header>
        <TopSlide></TopSlide>
      </el-header>
      <el-container>
        <el-affix :offset="100">
          <transition
            name="animate__animated animate__bounce"
            appear
            enter-active-class="animate__slideInLeft"
            leave-active-class="animate__slideOutLeft"
          >
            <LeftSlide v-show="$store.state.leftShow"></LeftSlide>
          </transition>
          </el-affix>
        <el-container>
            <MainBody></MainBody>
        </el-container>
      </el-container>
    </el-container>
  </div>
</template>

<script>
import TopSlide from '@/components/TopSlide'
import MainBody from '@/pages/MainBody'
import LeftSlide from './components/LeftSlide.vue'

import { onBeforeMount } from 'vue'
import axios from 'axios'
import { useStore } from 'vuex'


export default {
  name: 'App',
  components:{
    TopSlide,
    MainBody,
    LeftSlide
  },
  setup () {
    const store = useStore()
    onBeforeMount( ( ) => {
      axios({
        url:"http://localhost:8082/api/receive",
        method:"GET",
        data:{
          email:'2767525216'
        }
      }).then ( res => {
        // 逻辑放在Vuex中的action中进行处理
        store.dispatch("handleLog",res.data.data)
        
        // 由于根据自定义情况，你可能需要动态加载背景
        // 可以将逻辑也放在action中，在后续修改中可以做此处理
        // 由于远程加载可能会出现瞬间的页面卡顿如：不能直接加载出
        // 所以可以先仿FWF做一个loading
        document.querySelector("body").style.backgroundImage = `url("../assets/微信图片_20220517203235.jpg"))`

      } ) 

    } )
  }
}
</script>

<style>
*{
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
body{
  position: relative;
  background-size: 100% 100%;
  background-attachment: fixed;
  overflow-x: hidden;
  overflow-y: scroll;
  margin-bottom: 30px;
  background-image: url(./assets/微信图片_20220517203235.jpg);
}
.dark-mode {
    
    --dark-mode-bg:#ded5d5;

    --dark-mode-text-color:#fff;

    background-size: 100% 100%;
    
    background-attachment: fixed;
}
ul{
  list-style: none;
}
ul li{
  float: left;
}
a{
  text-decoration: none;
  color: var(--dark-mode-text-color,black) ;
  transition: .4s;
}

h1{
  font-size: 30px;
}

img{
  width: 100%;
}

::-webkit-scrollbar {
  width: 0;
}
/* 布局容器header */
.el-header{
  padding: 0 !important;
}

/* 代码标签样式设置 */
pre{
  padding: 20px 30px;
  border-radius: 10px;
  background-color: rgb(144, 141, 143);
  margin: 5px;
}
code{
  color: black;
  font-size: 16px;
  font-weight: 600;
  font-family: "Consolas";
}

</style>
