import { createRouter , createWebHashHistory} from 'vue-router'

const routes = [
    {
        path:'/',
        component:()=>import("@/components/EssayMain")
    },
    {
        path:'/detail/:id',
        name:'detail',
        component:()=>import('@/components/EssayDetail')
    },
    {
        path:"/introduce",
        name:"introduce",
        component:()=>import("@/components/IntroduceMe")
    },
    {
        path:'/location',
        name:"location",
        component:()=>import("@/components/WebLocation")
    },
]


export default new createRouter({
    routes,
    history:createWebHashHistory()
})

























































