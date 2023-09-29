import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import MonsterView from '../views/MonsterView.vue'
import DetailView from '../views/DetailView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/monster',
      name: 'monster',
      component: MonsterView
    },
    {
      path: '/detail:id',
      name: 'detail',
      component: DetailView
    }
  ]
})

export default router
