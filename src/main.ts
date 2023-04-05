import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'

import 'bootstrap/dist/css/bootstrap.min.css';
import './assets/main.css'

//import * as bootstrap from 'bootstrap';

const app = createApp(App)

//app.config.globalProperties.bootstrap = bootstrap;

app.use(createPinia())
app.use(router)

app.mount('#app')
