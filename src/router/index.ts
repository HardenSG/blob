import { createRouter, createWebHashHistory, RouteRecordRaw } from 'vue-router'

const routes: Array<RouteRecordRaw> = [
  {
    path:'/index',
    name:'index',
    component:()=>import("@/components/IndexCom.vue")
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
