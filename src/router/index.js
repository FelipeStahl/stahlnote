import Vue from 'vue'
import VueRouter from 'vue-router'
import AuthGuard from './auth-guard'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    meta: {
      icon: 'home', title: 'Home'
    },
    component: () => import(/* webpackChunkName: "home" */ '../views/Home'),
  },
  {
    path: '/editor',
    name: 'editor',
    meta: {
      icon: 'home', title: 'Editor Básico'
    },
    component: () => import(/* webpackChunkName: "editor" */ '../pages/editor/Basic'),
    beforeEnter: AuthGuard
  },
  {
    path: '/editorMedium',
    name: 'editorMedium',
    meta: {
      icon: 'home', title: 'Editor Médio'
    },
    component: () => import(/* webpackChunkName: "editor" */ '../pages/editor/Medium'),
    beforeEnter: AuthGuard
  },
  {
    name: 'expenses-list',
    path: '/expenses-list',
    meta: {
      icon: 'list', title: 'Lista Gastos'
    },
    component: () => import(
      /* webpackChunkName: "expenses-list" */
      '../pages/expenses-list/ExpensesList'
    ),
    beforeEnter: AuthGuard
  },
  {
    name: 'login',
    path: '/login',
    meta: { title: 'Login' },
    component: () => import(/* webpackChunkName: "login" */ '../views/Login')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
