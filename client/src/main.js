import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import 'bootstrap/dist/css/bootstrap.min.css'
import router from './router/index'
import store from './store/index'
import '@fortawesome/fontawesome-free/css/all.min.css'

createApp(App).use(router).use(store).mount('#app')
