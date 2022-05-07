<template>
      <TopSlide></TopSlide>
      <MainBody></MainBody>
</template>

<script>
import TopSlide from '@/components/TopSlide'
import MainBody from '@/pages/MainBody'

export default {
  name: 'App',
  components:{
    TopSlide,
    MainBody
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
  background:url(@/assets/1.webp) 100%;
  background-size: 100% 100%;
  background-attachment: fixed;
  overflow-x: hidden;
  overflow-y: scroll;
}
ul{
  list-style: none;
}
ul li{
  float: left;
}
a{
  text-decoration: none;
  color: black;
}
.fade-leave-to {
  display: none;
}
</style>
