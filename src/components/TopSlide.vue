<template>
      <transition name="header">
        <div v-show="isShow">
            <h2>
                当我在追光,我与光同航
            </h2>
        </div>
      </transition>
      <button @click="isShow = !isShow">切换</button>
</template>

<script>
import { ref } from '@vue/reactivity'
export default {
    name:'TopSlide',
    setup(){
        let isShow = ref(true)
        return{
            isShow
        }
    }
}
</script>

<style lang="less" scoped>
    div{
        position: fixed;
        z-index: -1;
        width: 100%;
        height: 50px;
        background-color:white;
        opacity: .8;
        h2{
            text-align: center;
            color: black;   
            line-height: 50px;
            user-select: none;
        }
    }
    .header-enter-active{
        animation: animate .5s linear;
    }
    .header-leave-active{
        animation: animate .5s linear reverse;
    }
    @keyframes animate{
        from{
            transform: translateY(-100%);
        }
        to{
            transform: translateY(0);
        }
    }
</style>