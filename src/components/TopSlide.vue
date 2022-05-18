<template>
      <transition name="header">
        <div v-show="isShow">
            <h2>
                {{ $store.getters.getWord }}
                <DrakUtils class="darkChangeRight"></DrakUtils>
            </h2>
        </div>
      </transition>
</template>

<script>
import { onBeforeMount, ref ,watch } from 'vue'
import listenScroll from '@/hooks/listenScroll'
import axios from 'axios'
import DrakUtils from './DrakUtils.vue'

export default {
    name:'TopSlide',
    components:{
        DrakUtils
    },
    setup(){
        let isShow = ref(true)
        let listen = listenScroll()
        watch(listen.result,(newValue)=>{
            newValue.value ? isShow.value = true : isShow.value = false
        })
        return{
            isShow,
            listen,
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
        box-shadow: 0px 0px 5px rgb(32, 32, 32);
        
        h2{
            text-align: center;
            color: var(--dark-mode-text-color,black);   
            line-height: 50px;
            user-select: none;
            transition: .4s;
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


    .darkChangeRight{
        position: absolute;
        right: 20px;
        display: inline-block;
        top: 5px;
    }
</style>