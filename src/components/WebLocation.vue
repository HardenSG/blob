<template>
  <section>
  <h2>
    <!-- <i>
      <a href="http://ezf805.xyz">微博</a>
    </i>
    <br>
    <br>
    寒假面试时候和两个学姐一起做的一个Vue+java的小DEMO，当时前端bug还是挺多的，就是因为vue的基础知识不过关！ -->
    {{ $store.getters.getLocation }}
  </h2>
  </section>
</template>

<script>
export default {
    name:'WebLocation'
}
</script>

<style lang="less" scoped>
  section{
    width: 100%;
    height: auto;
    padding: 40px 30px ;
    border-radius: 10px;
    color: var(--dark-mode-text-color,black);


    border: 2px solid rgb(66, 66, 66);
    box-shadow: 0 0 10px rgb(78, 76, 76);
    transition: .4s;
  }
</style>