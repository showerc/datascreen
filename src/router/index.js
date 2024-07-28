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
