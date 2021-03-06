import { createRouter, createWebHashHistory } from 'vue-router'
import Home from '../views/Home.vue'
import Letter from '../views/Letter.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
  },
  {
    path: '/letter/:letterDetails',
    name: 'Letter',
    component: Letter,
    props: true
  },
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
