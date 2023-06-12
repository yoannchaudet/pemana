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
    {
      path: '/lac-superieur',
      name: 'lac-superieur',
      component: () => import("@/views/PageLacSup.vue"),
    },   
    {
      path: '/saint-jerome',
      name: 'saint-jerome',
      component: () => import("@/views/PageSaintJe.vue"),
    },   
    {
      path: '/a-venir',
      name: 'a-venir',
      component: () => import("@/views/PageAVenir.vue"),
    },   
    
    {
      path: '/details',
      name: 'details',
      component: () => import("@/views/PageDetails.vue"),
    }
  ]
})

export default router
