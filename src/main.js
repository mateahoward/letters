import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import CountryFlag from 'vue-country-flag-next'


createApp(App)
.component('country-flag', CountryFlag)
.use(router)
.mount('#app')
