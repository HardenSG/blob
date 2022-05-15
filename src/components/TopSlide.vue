<template>
      <transition name="header">
        <div v-show="isShow">
            <h2>
                {{ $store.getters.getWord }}
            </h2>
        </div>
      </transition>
      <button></button>
</template>

<script>
import { ref ,watch } from 'vue'
import listenScroll from '@/hooks/listenScroll'
export default {
    name:'TopSlide',
    setup(){
        let isShow = ref(true)
        let listen = listenScroll()
        watch(listen.result,(newValue)=>{
            newValue.value ? isShow.value = true : isShow.value = false
        })
        return{
            isShow,
            listen
        }
    },
}
</script>

<style lang="less" scoped>
    div{
        position: fixed;
        z-index: 1000;    
        width: 100%;
        height: 50px;
        background-color:var(--dark-mode-bg,white);
        opacity: .8;
        h2{
            text-align: center;
            color: var(--dark-mode-text-color,black);   
            line-height: 50px;
            user-select: none;
        }
        button{
            opacity: 0;
        }
    }
    .header-enter-active{
        animation: animate .3s linear;
    }
    .header-leave-active{
        animation: animate .3s linear reverse;
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