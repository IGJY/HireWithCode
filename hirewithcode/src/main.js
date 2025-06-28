import { createRouter, createWebHistory } from 'vue-router'
import Welcome from './components/Welcome.vue'
import Guide from './components/Guide.vue'
import Accept from './components/Accept.vue'
import Finish from './components/Finish.vue'

const routes = [
  { path: '/', component: Welcome },
  { path: '/guide', component: Guide },
  { path: '/accept', component: Accept },
  { path: '/finish', component: Finish },
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

import { createApp } from 'vue'
import './style.css'
import App from './App.vue'

const app = createApp(App)
app.use(router)
app.mount('#app')
