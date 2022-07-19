<template>
    <section v-show="content">
        <!-- 返回的箭头 -->
        <span class="iconfont icon-fanhui" title="返回" @click="returnLastPage"></span>
        <!-- 文章标题 -->
        <header class="header">{{ Vtitle }}</header>
        <h5>
            作者： {{ Vname }}
        </h5>
        <h5>
            邮箱： {{ Vemail }}
        </h5>
        <h5>
            时间： {{ Vtime }}
        </h5>
        <!-- 文章主题 -->
        <p v-html="mdWord" class="md"></p>
    </section>
    
</template>

<script>
import { computed , onBeforeMount , ref  } from '@vue/runtime-core'
import { useRouter } from 'vue-router'
import axios from 'axios'
import markdown from "markdown-it"
export default {
    name:'EssayDetail',
    components:{
    },
    setup(){
        const router = useRouter( )

        // 路由传递来的信息
        const { id } = router.currentRoute.value.params

        // 返回上一个页面
        function returnLastPage(){
            router.go(-1)
        }

        // 用于接受待渲染的md文档
        let content = ref('')
        // 接受文章时间
        let Vtime = ref("")
        // 接受title
        let Vtitle = ref("")
        // 接受文章作者
        let Vname = ref("")
        // 接受作者email
        let Vemail = ref("")

        // 在挂载之前发送获取文章详情的请求
        onBeforeMount( ( ) => {
            axios({
                url:"http://localhost:8082/api/getDetail",
                method:"GET",
                params:{
                    id
                }
            }).then( res => {

                const { essay , time , title , email , name} = res.data

                // 渲染的文档
                content.value = essay
                // 接受文章时间
                Vtime.value = time
                // 接受title
                Vtitle.value = title
                // 接受文章作者
                Vname.value = name
                // 接受作者email
                Vemail.value = email
            })
        })

        // 处理待渲染文档
        // 使用markdown包，直接render
        let mdWord = computed(()=>{

            const md = new markdown()

            const b =  md.render(content.value)

            return b
        })

        return {
            content,
            mdWord,
            Vemail,
            Vname,
            Vtime,
            Vtitle,
            returnLastPage 
        }
    },
        
}
</script>

<style lang="less" scoped>
section{
    width: 100%;
    height: auto;
    padding: 40px 30px;
    opacity: .9;
    box-shadow: 0 0 10px rgb(90, 88, 88);
    border: 2px solid rgb(33, 33, 33);
    background-color: rgb(8, 96, 120);
    border-radius: 10px;
    color: var(--dark-mode-text-color,black);

    transition: .4s;
    .iconfont{
        color: black !important;
        cursor: pointer;
    }
    .header{
        font-size: 30px;
        font-weight: 700;
        text-align: center;
    }



    .md{
        margin-top: 40px;
    }
    pre {
        background-color: aqua !important;
    }

}
img{
    width: 100%;
    height: 100%;
}
</style>