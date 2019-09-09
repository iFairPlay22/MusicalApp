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
      redirect: () => 'home'
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
    },
    {
      path: '/theory-rythms',
      name: 'theory-rythms',
      component: () => import(
        './views/launcher/TheoryRythmsLauncher.vue'
      )
    },
    {
      path: '/practice-rythms',
      name: 'practice-rythms',
      component: () => import(
        './views/launcher/PracticeRythmsLauncher.vue'
      )
    },
    {
      path: '/theory-notes',
      name: 'game-theory-notes',
      component: () => import(
        './views/launcher/TheoryNotesLauncher.vue'
      )
    },
    {
      path: '/practice-notes',
      name: 'game-practice-notes',
      component: () => import(
        './views/launcher/PracticeNotesLauncher.vue'
      )
    },
    {
      path: '/game/history',
      name: 'history-game',
      component: () => import(
        './views/game/HistoryGame.vue'
      )
    },
    {
      path: '/game/listen',
      name: 'listen-game',
      component: () => import(
        './views/game/ListenGame.vue'
      )
    },
    {
      path: '/game/theory-notes',
      name: 'theory-notes-game',
      component: () => import(
        './views/game/NotesTheoryGame.vue'
      )
    },
    {
      path: '/game/practice-notes',
      name: 'practice-notes-game',
      component: () => import(
        './views/game/NotesPracticeGame.vue'
      )
    },
    {
      path: '/game/theory-rythms',
      name: 'theory-rythms-game',
      component: () => import(
        './views/game/RythmsTheoryGame.vue'
      )
    },
    {
      path: '/game/practice-rythms',
      name: 'practice-rythms-game',
      component: () => import(
        './views/game/RythmsPracticeGame.vue'
      )
    }
  ]
})
