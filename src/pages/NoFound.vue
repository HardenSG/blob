<template>
  <div class="img"></div>
</template>

<script>
export default {
    name:"NoFound",
    mounted(){
        console.log(111111);
    }
}
</script>

<style lang="less" scoped>
.img{
    position: absolute;
    left: 0;
    top: 0;
    bottom: 0;
    right: 0;
    background: url("@/assets/1.webp");
    background-attachment: fixed;
    background-size: 100% 100%;
}
</style>