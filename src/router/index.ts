import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import Thoughts from '../views/Thoughts.vue'
import ThisSite from '../views/ThisSite.vue'
import PsychEssentialism from '../views/PsychEssentialism.vue'
import Requests from '../views/Requests.vue'
import MethodOfLove from '../views/MethodOfLove.vue'

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
    },
    {
      path: '/psychessentialism',
      name: 'psychessentialism',
      component: PsychEssentialism
    },
    {
      path: '/requests',
      name: 'requests',
      component: Requests
    },
    {
      path: '/methodoflove',
      name: 'methodoflove',
      component: MethodOfLove
    }
  ]
})

export default router
