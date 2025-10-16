import { createRouter, createWebHashHistory } from 'vue-router'

const routerHistory = createWebHashHistory()

import Home from './pages/home.vue'
import About from './pages/about.vue'
import NotFoundPage from './pages/notFound.vue'

const routers = createRouter({
  history: routerHistory,
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/about',
      name: 'about',
      component: About
    },
    {
      path: '/:CatchAll(.*)',
      name: '404',
      component: NotFoundPage
    }
  ]
})

export default routers
