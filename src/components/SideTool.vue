<template>
    <span class="goTop iconfont" @click="goToTop">
        &#xe8d8;
    </span>
    <div style="display: flex; align-items: center" class="dialog">
        <el-popover 
            placement="left" 
            :width="200" 
            trigger="click"
            effect="dark"
        >
        <template #reference>
            <span class="tool iconfont">
                &#xe64b;
            </span>
        </template>
        
        <transition name="icon">
            <div v-show="isSunShow">
                <em class="iconfont icon" @click="changeSun">
                    &#xe611;
                </em>
            </div>
        </transition>

        <transition name="icon">
            <div v-show="isMornShow">
                <em class="iconfont icon" @click="changeMorn">
                    &#xe6a2;
                </em>
            </div>
        </transition>
        
        </el-popover>
    </div>
    
</template>

<script>
import {  ref } from 'vue'
import axios from 'axios'
export default {
    name:'SideTool',
    setup(){
        let isSunShow = ref(true)
        let isMornShow = ref(false)

        function changeSun(){

            isSunShow.value = !isSunShow.value

            setTimeout(()=>{
                document.querySelector('body').classList.add('dark-mode')
                isMornShow.value = !isMornShow.value
            },1200)
        }
    
        function changeMorn(){

            isMornShow.value = !isMornShow.value

            setTimeout(()=>{
                document.querySelector('body').classList.remove('dark-mode')
                isSunShow.value = !isSunShow.value
            },1200)
        }

        function goToTop(){
            let step;
            let timer = setInterval(()=>{

                if (!document.documentElement.scrollTop) {
                    clearInterval(timer)
                    return
                }
                
                step = Math.ceil(document.documentElement.scrollTop / 5)
                
                document.documentElement.scrollTop -= step

            },50)
        }

        return {
            isSunShow,
            isMornShow,
            changeSun,
            changeMorn,
            goToTop
        }
    },
    created(){
        axios({
            url:'http://localhost:8082/api/',
            method:'POST'
        }).then(res=>{
            console.log(res.data);
        })
        if (new Date().getHours() >= 19) {
            document.querySelector('body').classList.add('dark-mode')
            this.isMornShow = !this.isMornShow
            this.isSunShow = !this.isSunShow
        }
    }
}
</script>

<style lang="less" scoped>

.goTop{
    width: 40px;
    height: 40px;
    position: fixed;
    margin-top: 300px;
    margin-left: 1100px;
    cursor: pointer;
    border-radius: 3px;
    transition: .3s;    
    text-align: center;
    line-height: 40px;
    &:hover{
        background-color: rgb(72, 69, 69);
    }
}
.tool{
    width: 40px;
    height: 40px;
    cursor: pointer;
    border-radius: 3px;
    transition: .3s;    
    text-align: center;
    line-height: 40px;
    
    &:hover{
        background-color: rgb(72, 69, 69);
    }
}
.dialog{
    position: fixed;
    margin-top: 350px;
    margin-left: 1100px;
}
.icon{
    font-size: 40px !important;
    cursor: pointer;
}

.icon-enter-active{
    animation: animate 1.2s linear;
}
.icon-leave-active{
    animation: animate 1.2s linear reverse;
}
@keyframes animate{
    from{
        transform: rotateY(180deg)
    }
    to{
        transform: rotateY(0);
    }
}

</style>