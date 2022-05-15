<template>
  <div>
    <section @click="pushDetail(p.name)" v-for="(p,index) in data" :key="index">
        {{p.name}}
        {{p.age}}
    </section>
  </div>
  
</template>

<script>
import { getCurrentInstance, reactive } from 'vue'

export default {
    name:'EssayMain',
    setup(){
        // 在setup中不能直接获取this，需要用getCurrentInstance
        const { proxy } = getCurrentInstance()

        let data = reactive([
            {
                name:'闫德强',
                age:19
            },{
                name:'哈登',
                age:33
            },
            {
                name:'库里',
                age:34
            },
            {
                name:'罗斯',
                age:35
            },
            {
                name:'罗斯',
                age:35
            },
            {
                name:'罗斯',
                age:35
            },
            {
                name:'罗斯',
                age:35
            },
            {
                name:'罗斯',
                age:35
            },
            {
                name:'罗斯',
                age:35
            },
            {
                name:'罗斯',
                age:35
            },
            {
                name:'罗斯',
                age:35
            },
            {
                name:'闫德强',
                age:19
            },{
                name:'哈登',
                age:33
            },
            {
                name:'库里',
                age:34
            },
            {
                name:'罗斯',
                age:35
            },
            {
                name:'罗斯',
                age:35
            },
            {
                name:'罗斯',
                age:35
            },
            {
                name:'罗斯',
                age:35
            },
            {
                name:'罗斯',
                age:35
            },
            {
                name:'罗斯',
                age:35
            },
            {
                name:'罗斯',
                age:35
            },
            {
                name:'罗斯',
                age:35
            },
            {
                name:'闫德强',
                age:19
            },{
                name:'哈登',
                age:33
            },
            {
                name:'库里',
                age:34
            },
            {
                name:'罗斯',
                age:35
            },
            {
                name:'罗斯',
                age:35
            },
            {
                name:'罗斯',
                age:35
            },
            {
                name:'罗斯',
                age:35
            },
            {
                name:'罗斯',
                age:35
            },
            {
                name:'罗斯',
                age:35
            },
            {
                name:'罗斯',
                age:35
            },
            {
                name:'罗斯',
                age:35
            }

        ])
        // 点击push进详细页面
        function pushDetail(name){

            proxy.$router.push({path:"/detail",query:{
                    name
                }
            })
            
        }

        // 交付出去
        return{
            pushDetail,
            data
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
        background-color: var(--dark-mode-bg,white);
        opacity: .6;
        border-radius: 10px;
        transition: .5s;
        box-shadow: 0 0 6px white;
        color: var(--dark-mode-text-color,black);
        &:hover{
            cursor: pointer;
            transform: scale(.9);
        }
    }
</style>