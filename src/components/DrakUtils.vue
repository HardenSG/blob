<template>
  <div class="darkAndLight">
    <div class="slide" @click="changeMode"></div>
  </div>
</template>

<script>
export default {
    name:"UtilsCom",
    setup() {
         function changeMode(){
    
            const slide = document.querySelector(".slide") 

            const body = document.querySelector('body') 

            // 判断是否存在黑暗模式的类
            const flag = body?.className.indexOf("dark-mode")
        
            if (flag) {

                slide.style.transform = 'translateX(60px)'

                slide.style.backgroundColor = 'rgb(198, 194, 194)'

                body?.classList.remove("light-mode")

                body.classList.add("dark-mode")

                return 
            }

            slide.style.backgroundColor = 'rgb(107, 105, 105)'

            slide.style.transform = 'translateX(0px)'

            body?.classList.remove("dark-mode")

            body?.classList.add("light-mode")
         }
        return{
            changeMode
        }
    }
}
</script>

<style lang="less" scoped>
.darkAndLight {
    float: right;
    width: 100px;
    height: 40px;
    // background-color: rgb(49, 47, 47);
    border-radius: 20px;
    box-shadow: 0 0 5px black;
    padding: 5px;
    .slide {
        width: 30px;
        height: 30px;
        border-radius: 15px;
        background-color: rgb(107, 105, 105);
        border: 2px solid rgb(49, 48, 48);
        transition: 0.6s;
        cursor: pointer;
    }
}
</style>