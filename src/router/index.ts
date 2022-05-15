import { createRouter, createWebHashHistory, RouteRecordRaw } from 'vue-router'
import { defineAsyncComponent } from 'vue' 

const routes: Array<RouteRecordRaw> = [
  {
    path:'/',
    name:'index',
    component:( ) => import("@/components/index/IndexCom.vue")
  },
  {
    path:'/manage/:pages/:id',
    name:'manage',
    component: defineAsyncComponent( ( ) => import("@/views/ManageBlog.vue") )
  },
  {
    path:'/:catchAll(.*)',
    name:'404',
    component: defineAsyncComponent( ( ) =>  import("@/views/NoFound.vue") ) 
  },
  {
    path:'/makeui',
    name:'makeui',
    component: defineAsyncComponent( ( ) =>  import("@/components/make/MakeUI.vue") ) 
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
