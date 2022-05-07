<template>
  <div>
      <section @click="pushDetail">
      
  </section>
  <section @click="pushDetail">
      
  </section>
  <section @click="pushDetail">
      
  </section>
  <section @click="pushDetail">
      
  </section>
  <section @click="pushDetail">
      
  </section>
  <section @click="pushDetail">
      
  </section>
  <section @click="pushDetail">
      
  </section>
  <section @click="pushDetail">
      
  </section>

  <section @click="pushDetail">
      
  </section>
  <section @click="pushDetail">
      
  </section>
  <section @click="pushDetail">
      
  </section>
  </div>
  
</template>

<script>
import { getCurrentInstance } from 'vue'
export default {
    name:'EssayMain',
    setup(){
        // 在setup中不能直接获取this，需要用getCurrentInstance
        const { proxy } = getCurrentInstance()

        // 点击push进详细页面
        function pushDetail(){

            proxy.$router.push({path:"/detail",query:{
                    id:1
                }
            })
            
        }

        // 交付出去
        return{
            pushDetail
        }
    }   
}
</script>

<style lang="less" scoped>
    section{
        width: 100%;
        height: auto;
        padding: 40px 30px;
        margin-top: 20px;
        background-color: white;
        opacity: .6;
        border-radius: 10px;
        transition: .3s;
        &:hover{
            cursor: pointer;
            transform: scale(.9);
        }
    }
</style>