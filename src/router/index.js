import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: () => import("@/views/PageAccueil.vue"),
    },   
    
    {
      path: '/marina',
      name: 'marina',
      component: () => import("@/views/PageMarina.vue"),
    },   
  ]
})

export default router
