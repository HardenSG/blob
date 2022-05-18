import { createRouter , createWebHashHistory} from 'vue-router'

const routes = [
    {
        path:'/:id',
        component:()=>import("@/components/EssayMain")
    },
    {
        path:'/detail',
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
    {
        path:'/:catchAll(.*)',
        name:'404',
        component:  ( ) =>  import("@/pages/NoFound.vue") 
    },
]


export default new createRouter({
    routes,
    history:createWebHashHistory()
})

























































