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
    {
      path: '/about-us',
      name: 'about-us',
      component: () => import(
        './views/AboutUs.vue'
      )
    },
    {
      path: '/game-choice',
      name: 'game-choice',
      component: () => import(
        './views/GameChoice.vue'
      )
    },
    {
      path: '/notes-launcher',
      name: 'notes-launcher',
      component: () => import(
        './views/launcher/NotesLauncher.vue'
      )
    },
    {
      path: '/rythms-launcher',
      name: 'rythms-launcher',
      component: () => import(
        './views/launcher/RythmsLauncher.vue'
      )
    },
    {
      path: '/listen-launcher',
      name: 'listen-launcher',
      component: () => import(
        './views/launcher/ListenLauncher.vue'
      )
    },
    {
      path: '/history-launcher',
      name: 'history-launcher',
      component: () => import(
        './views/launcher/HistoryLauncher.vue'
      )
    }
  ]
})
