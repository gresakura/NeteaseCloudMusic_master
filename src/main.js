
import '@/styles/common.scss'
import { createApp } from 'vue'
import { createPinia } from 'pinia'
import persist from 'pinia-plugin-persistedstate'
import filter from '@/utils/filter'

import App from './App.vue'
import router from './router'

import * as ElementPlusIconsVue from '@element-plus/icons-vue'

const app = createApp(App)


// element icon
for (const [key, component] of Object.entries(ElementPlusIconsVue)) {
    app.component(key, component)
}





// pinia 持久化
const pinia = createPinia()
pinia.use(persist)

app.use(filter)
app.use(pinia)
app.use(router)

app.mount('#app')
