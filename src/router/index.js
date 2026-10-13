import { createRouter, createWebHistory } from 'vue-router'
import CercadorIndex from '@/pages/cercadorIndex.vue'


const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
   
    { 
      path: '/', 
      name: 'pelis', 
      component: CercadorIndex, 
    },
  ],
})

export default router
