import { createRouter, createWebHistory } from 'vue-router'

const routes = [
  {
    path: '/',
    name: 'SplashScreen',
    component: () => import('@/views/SplashScreen.vue')
  },
  {
    path: '/auth',
    name: 'Auth',
    component: () => import('@/views/Auth.vue')
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
