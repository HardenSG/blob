<template>
  <div class="img">
    <el-button class="button" @click="GoToIndex">回到刚刚</el-button>
  </div>
</template>

<script lang="ts">
import { useRouter } from 'vue-router'
export default {
    name:'NoFound',
    setup ( ) {
        const router = useRouter()

        function GoToIndex () {
            router.go(-1)
        }

        return{
            GoToIndex
        }
    }
}
</script>

<style lang="less" scoped>
    .img{
        position: absolute;
        left: 0;
        top: 0;
        bottom: 0;
        right: 0;
        background: url("../assets/404.gif");
        background-attachment: fixed;
        background-size: 100% 100%;
        .button{
            position: absolute;
            width: 30%;
            height: 20%;
            left: 7%;
            top: 70%;
            opacity: .5;
            color: black;
            font-weight: 700;
            font-size: 5vw;
        }
    }

</style>