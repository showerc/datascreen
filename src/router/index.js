import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export const routes = [
  {
    path: '/',
    redirect: '/a',
    hidden: true
  },
  {
    path: '/a',
    name: 'A',
    component: () => import('@/views/pages/A/index.vue'),
    hidden: true
  },
  {
    path: '/ba',
    name: 'BA',
    component: () => import('@/views/pages/BA/index.vue'),
    hidden: true
  },
  {
    path: '/bb',
    name: 'BB',
    component: () => import('@/views/pages/BB/index.vue'),
    hidden: true
  },
  {
    path: '/ca',
    name: 'CA',
    component: () => import('@/views/pages/CA/index.vue'),
    hidden: true
  },
  {
    path: '/cb',
    name: 'CB',
    component: () => import('@/views/pages/CB/index.vue'),
    hidden: true
  },
  {
    path: '/d',
    name: 'D',
    component: () => import('@/views/pages/D/index.vue'),
    hidden: true
  },
  {
    path: '/e',
    name: 'E',
    component: () => import('@/views/pages/E/index.vue'),
    hidden: true
  },
  {
    path: '/f',
    name: 'F',
    component: () => import('@/views/pages/F/index.vue'),
    hidden: true
  },
  {
    path: '/fa',
    name: 'FA',
    component: () => import('@/views/pages/FA/index.vue'),
    hidden: true
  },
  {
    path: '/g',
    name: 'G',
    component: () => import('@/views/pages/G/index.vue'),
    hidden: true
  },
  {
    path: '/h',
    name: 'H',
    component: () => import('@/views/pages/H/index.vue'),
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
