import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import Letter from '../views/Letter.vue'

const routes = [
  {
    path: '/letters/',
    name: 'Home',
    component: Home,
  },
  {
    path: '/letters/letter/:letterDetails',
    name: 'Letter',
    component: Letter,
    props: { default: true }
  },
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
