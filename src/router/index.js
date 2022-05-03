import { createRouter, createWebHistory } from 'vue-router'
import SignIn from '../views/SignIn.vue'
import AdminMain from '../views/AdminMain.vue'

const routes = [
  {
    path: '/',
    name: 'SignIn',
    component: SignIn
  },
  {
    path: '/admin',
    name: 'Admin',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    // component: () => import(/* webpackChunkName: "admin" */ '../views/AdminMain.vue')
    component: AdminMain
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
