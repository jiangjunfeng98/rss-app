import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: () => import('../views/markdown-editor/MarkdownEditor.vue')
    },
    {
      path: '/about',
      name: 'about',
      component: () => import('../views/about/About.vue')
    }
  ]
})

export default router
