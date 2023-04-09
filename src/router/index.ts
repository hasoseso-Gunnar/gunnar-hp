import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'

//Thoughts
import Thoughts from '../views/Thoughts.vue'
import ThisSite from '../views/ThisSite.vue'
import PsychEssentialism from '../views/PsychEssentialism.vue'
import AmericaFirstDay from '../views/AmericaFirstDay.vue'
import AmericaSecondDay from '../views/AmericaSecondDay.vue'
import AmericaThoughts from '../views/AmericaThoughts.vue'
import howToStartGPT from '../views/howToStartGPT.vue'

//Requests
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

    //Thoughts
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
      path: '/americafirstday',
      name: 'americafirstday',
      component: AmericaFirstDay
    },
    {
      path: '/americasecondday',
      name: 'americasecondday',
      component: AmericaSecondDay
    },
    {
      path: '/americathoughts',
      name: 'americathoughts',
      component: AmericaThoughts
    },
    {
      path: '/howToStartGPT',
      name: 'howToStartGPT',
      component: howToStartGPT
    },

    //Requests
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
