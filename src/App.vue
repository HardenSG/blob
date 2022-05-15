<template>
  <div>
    <component :is='isShowLogin'></component>
  </div>
</template>

<script lang="ts">
import {  computed, defineAsyncComponent, getCurrentInstance, ref , ComponentInternalInstance, State  } from "@vue/runtime-core";

const login = defineAsyncComponent(() => import("@/views/LoginCom.vue"))

const MainCom = defineAsyncComponent(() => import("@/views/MainCom.vue"))

export default{
    components:{
      MainCom,
      login,
    },
    setup ( props , context ) {
      
      const  { proxy } = getCurrentInstance() as ComponentInternalInstance 
        
      /**
       * 切换登录和主界面
       */
      let isShowLogin = computed( () => {
        
        const a = proxy?.$store.state || '' 

          switch( a['isLog'] ){
            case true : {
              return MainCom
            }
            case false : {
              return login
            }
          }
        })

      return {
        isShowLogin
      }
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

    background-color: var(--dark-mode-bg,#d0cece);

    color: var(--dark-mode-text-color,black);

  }

  body.light-mode {
    
    --dark-mode-bg:#d0cece;

    --dark-mode-text-color:black;

    transition: 1.5s;

}

  body.dark-mode {
    
    --dark-mode-bg:#2d2b2b;

    --dark-mode-text-color:#fff;

    transition: 1.5s;

}
</style>
