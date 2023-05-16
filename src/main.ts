import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'
import { Vue3ProgressPlugin } from '@marcoschulte/vue3-progress';

import 'bootstrap/dist/css/bootstrap.min.css';
import './assets/main.css'

import '@marcoschulte/vue3-progress/dist/index.css';
//import * as bootstrap from 'bootstrap';

const app = createApp(App)

//app.config.globalProperties.bootstrap = bootstrap;
app.use(Vue3ProgressPlugin)
app.use(createPinia())
app.use(router)

app.mount('#app')
