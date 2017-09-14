import Vue from 'vue'
import Router from 'vue-router'
import Intro from '@/components/pages/Intro'
import Login from '@/components/pages/Login'
import Cut from '@/components/pages/Cut'
import Comic from '@/components/pages/Comic'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Intro',
      component: Intro
    },
    {
      path: '/user/login',
      name: 'Login',
      component: Login
    },
    {
      path: '/user/join',
      name: 'Join',
      component: Login
    },
    {
      path: '/user',
      name: 'UserIndex',
      component: Comic
    },
    {
      path: '/user/password',
      name: 'Password',
      component: Login
    },
    {
      path: '/cut',
      name: 'Cut',
      component: Cut
    },
    {
      path: '/comic',
      name: 'Comic',
      component: Comic
    }
  ]
})
