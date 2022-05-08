<template>
    <section>
        <span class="iconfont" title="返回" @click="returnLastPage">
            &#xe6ff;
        </span>
        <h2>
            {{param.name}}
        </h2>
    </section>
</template>

<script>
import { getCurrentInstance, reactive } from '@vue/runtime-core'
export default {
    name:'EssayDetail',
    setup(){
        const { proxy } = getCurrentInstance()

        let param = reactive(proxy.$router.currentRoute.value.query)

        // 返回上一个页面
        function returnLastPage(){
            proxy.$router.go(-1)
        }

        return {
            param,
            returnLastPage   
        }
    },
    created() {

        console.log(this);
        
    },
}
</script>

<style lang="less" scoped>
section{
    width: 100%;
    height: auto;
    padding: 40px 30px;
    background-color:var(--dark-mode-bg, white);
    opacity: .7;
    border-radius: 10px;
    color: var(--dark-mode-text-color,black);
    h2{
        color: var(--dark-mode-text-color,black);
    }
    .iconfont{
        color: black !important;
        cursor: pointer;
    }
}
</style>