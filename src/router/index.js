import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    meta: {
      icon: 'home', title: 'Home'
    },
    component: () => import(/* webpackChunkName: "home" */ '../pages/home/Home')
  },
  {
    path: '/editor',
    name: 'editor',
    meta: {
      icon: 'home', title: 'Editor Básico'
    },
    component: () => import(/* webpackChunkName: "editor" */ '../pages/editor/Basic')
  },
  {
    path: '/editorMedium',
    name: 'editorMedium',
    meta: {
      icon: 'home', title: 'Editor Médio'
    },
    component: () => import(/* webpackChunkName: "editor" */ '../pages/editor/Medium')
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
    )
  },
  {
    name: 'login',
    path: '/login',
    meta: { title: 'Login' },
    component: () => import(/* webpackChunkName: "login" */ '../pages/login/Login')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

router.beforeEach((to, from, next) => {
  document.title = `${to.meta.title} - Expenses`

  if (!window.uid && to.name !== 'login') {
    next({ name: 'login' })
  } else {
    next()
  }
})

export default router
