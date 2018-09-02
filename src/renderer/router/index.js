import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'landing-page',
      component: require('@/pages/LandingPage').default
    },
    {
      path: '/categories',
      name: 'categories-page',
      component: require('@/pages/CategoriesPage').default
    },
    {
      path: '*',
      redirect: '/'
    }
  ]
})
