<template>
    <div class="header">
        <UtilsCom></UtilsCom>
    </div>
</template>

<script lang="ts">
import UtilsCom from "./UtilsCom.vue"
export default {
    components:{
        UtilsCom
    }
}
</script>

<style lang="less" scoped>
    .header{
        display: flex;
        width: 100%;
        height: 100%;
        padding-right: 20px;
        background-color: rgb(138, 119, 119);
        align-items: center;
        justify-content: end;
    }
</style>