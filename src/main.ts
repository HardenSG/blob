import { createApp } from 'vue'
import App from './App.vue'

const app = createApp(App)

import router from './router'

import store from './store'

import ElementPlus from 'element-plus'

import 'element-plus/dist/index.css'

import "animate.css" 

app.use(store)

app.use(ElementPlus)

app.use(router)

app.mount('#app')
