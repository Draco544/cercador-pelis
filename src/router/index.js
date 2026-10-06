import { createRouter, createWebHistory } from 'vue-router'
import Index from '@/pages/index.vue'
import CercadorIndex from '@/pages/cercadorIndex.vue'


const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      component: Index,
    },
    {
      path: '/cercador',
      component: CercadorIndex,
    },
  ],
})

export default router
