import { createRouter , createWebHashHistory} from 'vue-router'

const routes = [
    {
        path:'/',
        component:()=>import("@/components/EssayMain")
    },
    {
        path:'/detail',
        component:()=>import('@/components/EssayDetail')
    },
    {
        path:"/introduce",
        component:()=>import("@/components/IntroduceMe")
    },
    {
        path:'/location',
        component:()=>import("@/components/WebLocation")
    }
]


export default new createRouter({
    routes,
    history:createWebHashHistory()
})

























































