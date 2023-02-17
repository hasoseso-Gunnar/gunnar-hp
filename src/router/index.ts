import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import Thoughts from '../views/Thoughts.vue'
import ThisSite from '../views/ThisSite.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/thoughts',
      name: 'thoughts',
      component: Thoughts
    },
    {
      path: '/thissite',
      name: 'thissite',
      component: ThisSite
    }
  ]
})

export default router
