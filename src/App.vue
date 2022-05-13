<template>
  <div>
    <component :is='isShowLogin'></component>
  </div>
</template>

<script lang="ts">
import {  computed, defineAsyncComponent, getCurrentInstance, ref } from "@vue/runtime-core";

const login = defineAsyncComponent(() => import("@/views/LoginCom.vue"))

const MainCom = defineAsyncComponent(() => import("@/views/MainCom.vue"))

export default{
    components:{
      MainCom,
      login,
    },
    setup ( props , context ) {
      
      const  {proxy} = getCurrentInstance() 
      
      /**
       * 切换登录和主界面
       */
      let isShowLogin = computed( () => {
          switch( proxy.$store.state.isLog ){
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
    background-color: var(--dark-mode-bg,rgb(227, 223, 223));

  }
  body.dark-mode {
    
    --dark-mode-bg:#2d2b2b;

    --dark-mode-text-color:#fff;

    transition: .3s;

}
</style>
