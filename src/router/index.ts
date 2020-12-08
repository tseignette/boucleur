import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'
import MusicsView from '../views/MusicsView.vue'
import PlayerView from '../views/PlayerView.vue'

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    component: MusicsView
  },
  {
    path: '/player',
    component: PlayerView
  },
  {
    path: '/:catchAll(.*)*',
    redirect: '/'
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
