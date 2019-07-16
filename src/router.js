import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {/*Redirect*/
      path: '/test',
      name: 'test',
      redirect: () => '/pages/AboutUs'
    },
    {/*PageRouting*/
      path: '/about-us',
      name: 'about-us',
      component: () => import(
        './views/AboutUs.vue'
      )
    }
  ]
})
