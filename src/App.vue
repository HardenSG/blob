<template>
      <TopSlide></TopSlide>
      <MainBody></MainBody>
      <!-- <teleport to=''> -->
        <img src=""/>
      <!-- </teleport> -->
</template>

<script>
import TopSlide from '@/components/TopSlide'
import MainBody from '@/pages/MainBody'
import { onBeforeMount, ref } from 'vue'
import axios from 'axios'
import { useStore } from 'vuex'


export default {
  name: 'App',
  components:{
    TopSlide,
    MainBody
  },
  setup () {
    const store = useStore()

    onBeforeMount( ( ) => {
      axios({
        url:"http://localhost:8082/api/receive",
        data:{
          email:'2767525216'
        }
      }).then ( res => {
        const { dark_img , light_img , user_introduce , user_location , user_title ,user_word } = res.data.data

        store.commit( "changeStateLocation", user_location)
        store.commit( "changeStateIntroduce", user_introduce)
        store.commit( "changeStateDarkImg", dark_img)
        store.commit( "changeStateLightImg", light_img)
        store.commit( "changeStateTitle", user_title)
        store.commit( "changeStateWord", user_word)

        document.querySelector("body").style.backgroundImage = `url(${light_img})`
        
        // document.querySelector(".dark-mode").style.backgroundImage = `url(${dark_img})`

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
  background:url('@/assets/1.webp') 100%;
  background-size: 100% 100%;
  background-attachment: fixed;
  overflow-x: hidden;
  overflow-y: scroll;
}
.dark-mode {
    
    --dark-mode-bg:#5d5a5a;

    --dark-mode-text-color:#fff;

    background: url(@/assets/2.webp) 100%;

    background-size: 100% 100%;
    
    background-attachment: fixed;

    transition: .4s;
}
@font-face {
  font-family: 'iconfont';  /* Project id 3383022 */
  src: url('http://at.alicdn.com/t/font_3383022_pfige4uoa8.woff2?t=1651925840519') format('woff2'),
       url('http://at.alicdn.com/t/font_3383022_pfige4uoa8.woff?t=1651925840519') format('woff'),
       url('http://at.alicdn.com/t/font_3383022_pfige4uoa8.ttf?t=1651925840519') format('truetype');
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
  color: var(--dark-mode-text-color,black) !important;
}
</style>
