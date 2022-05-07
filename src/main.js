import { createApp } from 'vue'
import App from './App.vue'

// 引入store
import store from '@/store/index'

// 引入router
import router from '@/router/index'

// 引入animate.css
import("animate.css")   

const app = createApp(App)

app.use(store)

app.use(router)

app.mount('#app')

// createApp(App).use(store).mount("#app")
