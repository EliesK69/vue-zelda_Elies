import './assets/assets/css/bootstrap/bootstrap-grid.min.css'
import './assets/assets/css/bootstrap/bootstrap-reboot.min.css'
import './assets/assets/css/bootstrap/bootstrap.min.css'

import './assets/assets/css/theme/style.css'
import './assets/assets/css/theme/mobirise-icons-bold.css'
import './assets/assets/css/theme/mbr-additional.css'

import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

const app = createApp(App)

app.use(router)

app.mount('#app')
