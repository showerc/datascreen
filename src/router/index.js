import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export const routes = [
  {
    path: '/',
    component: () => import('@/views/pages/A/index.vue'),
    hidden: true
  },
  {
    path: '/a',
    component: () => import('@/views/pages/A/index.vue'),
    hidden: true
  },
  {
    path: '/b',
    component: () => import('@/views/pages/B/index.vue'),
    hidden: true
  },
  {
    path: '/c',
    component: () => import('@/views/pages/C/index.vue'),
    hidden: true
  },
  {
    path: '/d',
    component: () => import('@/views/pages/D/index.vue'),
    hidden: true
  },
  {
    path: '/e',
    component: () => import('@/views/pages/E/index.vue'),
    hidden: true
  },
  {
    path: '/fa',
    component: () => import('@/views/pages/FA/index.vue'),
    hidden: true
  },
  {
    path: '/fb',
    component: () => import('@/views/pages/FB/index.vue'),
    hidden: true
  },
  {
    path: '/fc',
    component: () => import('@/views/pages/FC/index.vue'),
    hidden: true
  }
]

const createRouter = () => new Router({
  mode: 'history', // require service support
  scrollBehavior: () => ({ y: 0 }),
  routes,
  base: '/'
})

const router = createRouter()

export default router
