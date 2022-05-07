<template>
    <section>
        <h2>
            {{param.id}}
        </h2>
    </section>
</template>

<script>
import { getCurrentInstance, reactive, ref } from '@vue/runtime-core'
export default {
    name:'EssayDetail',
    setup(){
        const { proxy } = getCurrentInstance()

        let param = reactive(proxy.$router.currentRoute.value.query)

        return {
            param   
        }
    },
    created() {

        // console.log(this.$router.currentRoute.value);
        
    },
}
</script>

<style lang="less" scoped>
section{
    width: 100%;
    height: auto;
    padding: 40px 30px;
    background-color: white;
    opacity: .6;
    border-radius: 10px;
    h2{
        color: black;
    }
}
</style>