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

import { onBeforeMount, ref } from 'vue'
import axios from 'axios'
import { useStore } from 'vuex'
import { useRouter } from 'vue-router'


export default {
  name: 'App',
  components:{
    TopSlide,
    MainBody,
    LeftSlide
  },
  setup () {
    const store = useStore()
    
    const router = useRouter()

    onBeforeMount( ( ) => {
      axios({
        url:"http://36.133.40.168:8082/api/receive",
        data:{
          email:'2767525216'
        }
      }).then ( res => {
        const {  light_img , user_introduce , user_location , user_title ,user_word } = res.data.data

        store.commit( "changeStateLocation", user_location)
        store.commit( "changeStateIntroduce", user_introduce)
        store.commit( "changeStateLightImg", light_img)
        store.commit( "changeStateTitle", user_title)
        store.commit( "changeStateWord", user_word)
        
        document.querySelector("body").style.backgroundImage = `url(${light_img})`
        
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
}
.dark-mode {
    
    --dark-mode-bg:#ded5d5;

    --dark-mode-text-color:#fff;

    background-size: 100% 100%;
    
    background-attachment: fixed;
}
@font-face {
  font-family: 'iconfont';  /* Project id 3383022 */
  src: url('http://at.alicdn.com/t/font_3383022_0ayag7wyme0a.woff2?t=1652617079379') format('woff2'),
       url('http://at.alicdn.com/t/font_3383022_0ayag7wyme0a.woff?t=1652617079379') format('woff'),
       url('http://at.alicdn.com/t/font_3383022_0ayag7wyme0a.ttf?t=1652617079379') format('truetype');
}
/* http: */
.iconfont {
  font-family: "iconfont" !important;
  font-size: 25px;
  color: yellow;
  font-weight: 500;
  user-select: none;
  -webkit-font-smoothing: antialiased;
  -webkit-text-stroke-width: 0.2px;
  -moz-osx-font-smoothing: grayscale;
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

::-webkit-scrollbar {
  width: 0;
}


/* 布局容器header */
.el-header{
  padding: 0 !important;
}
</style>
