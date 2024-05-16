import { createApp } from 'vue'
import App from './App.vue'
import { createPinia } from 'pinia'
import { gsap } from 'gsap'
import './assets/base.css'

const pinia = createPinia()
const app = createApp(App)

app.use(pinia)
        .use(gsap)
            .mount('#app');