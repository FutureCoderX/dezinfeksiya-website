import { createApp } from 'vue'
import App from './App.vue'
import '@/assets/scss/main.scss'
import '@fortawesome/fontawesome-free/css/all.css'
import AOS from 'aos';
import 'aos/dist/aos.css';
AOS.init();

import { languages } from './i18n'
import { createI18n } from 'vue-i18n'
const app = createApp(App)
const i18n = createI18n({
    legacy: true,
    locale: 'ru',
    messages: languages
})
app.use(i18n)
app.mount('#app')
