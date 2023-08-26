import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'Saludo',
      component: HomeView
    },
    {
      path: '/ordener',
      name: 'ordenar',
      component: () => import('../views/OrdenerView.vue')
    }
  ]
})

export default router
