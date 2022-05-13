<template>
  <div class="darkAndLight">
    <div class="slide" @click="changeMode"></div>
  </div>
</template>

<script lang="ts" >
export default {
    name:"UtilsCom",
    setup() {
         function changeMode(){
    
            const slide = <HTMLElement>document.querySelector(".slide") 

            const body = <HTMLElement>document.querySelector('body') 

            const darkAndLight = <HTMLElement>document.querySelector(".darkAndLight") 

            // 判断是否存在黑暗模式的类
            const flag = body?.className.indexOf("dark-mode")
        
            if (flag) {

                darkAndLight.style.backgroundColor = '#999'

                slide.style.transform = 'translateX(60px)'

                slide.style.backgroundColor = 'white'

                body.classList.add("dark-mode")

                return 
            }

            darkAndLight.style.backgroundColor = 'white'

            slide.style.backgroundColor = 'black'

            slide.style.transform = 'translateX(0px)'

            body?.classList.remove("dark-mode")
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
    background-color: white;
    border-radius: 20px;
    padding: 5px;
    .slide {
        width: 30px;
        height: 30px;
        border-radius: 15px;
        background-color: rgb(67, 64, 64);
        transition: 0.6s;
        cursor: pointer;
    }
}
</style>