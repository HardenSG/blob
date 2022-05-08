import { createApp } from 'vue'
import App from './App.vue'

// 引入store
import store from '@/store/index'

// 引入router
import router from '@/router/index'

// 引入animate.css
import("animate.css")   

// 引入ElementPlus
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'

const app = createApp(App)

app.use(store)

app.use(router)

app.use(ElementPlus)

app.mount('#app')

// createApp(App).use(store).mount("#app")
