<template>
  <section>
    <!-- <h1>Hello Everyone</h1>
    <br>
    <br>
    <h2>
      先来介绍一下
      <br>
      <br>
    </h2>
    <h4>
      闫德强
      <br>
      <br>
      坐标：天津，天津理工大学大一学生在读，有一颗全栈的心，目前正在学习前端！
      <br>
      <br>
      前端的东西也是很难，但是技术哪有不难的呢？靠的是兴趣！
      <br>
      <br>
      经历：<i><a href="https://404fwf.cn">fwf工作室成员(SG)</a></i> 😵
      <br>
      <br>
      常用技术栈：Vue(因为当初工作室面试要做项目，所以几天学完就上手做项目了，还在继续补充Vue知识中！)
      <br>
      <br>
      兴趣：喜欢听歌，喜欢狗狗，喜欢打篮球（我可不会唱跳Rap），喜欢代码！
      <br>
      <br>
      因为知道自己的不足，才要永远的虚心接受！永远也不要失去信心，就像你在篮球场一样，这也是我在工作室给自己起名SG的原因，在篮球中SG是得分后卫的简称，为了勉励自己能够永远积极向上！
    </h4> -->
    <h2>
      {{ $store.getters.getIntroduce }}
    </h2>
  </section>
</template>

<script>
export default {
    name:'IntroduceMe',
    setup(){
      
      return{

      }
    },
    created() {
      
    },
}
</script>

<style lang="less" scoped>
section{
  width: 100%;
  height: auto;
  padding: 40px 30px;
  background-color: var(--dark-mode-bg,white);
  opacity: .6;
  border-radius: 10px;
}
</style>