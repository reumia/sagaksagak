import Vue from 'vue'
import Router from 'vue-router'
import Intro from '@/components/pages/Intro'
import Login from '@/components/pages/Login'
import Cut from '@/components/pages/Cut'
import Comic from '@/components/pages/Comic'
import User from '@/components/pages/User'

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
      name: 'User',
      component: User
    },
    {
      path: '/user/password',
      name: 'Password',
      component: Login
    },
    {
      path: '/cut/:id',
      name: 'Cut',
      component: Cut,
      props: true
    },
    {
      path: '/comic',
      name: 'Comic',
      component: Comic
    }
  ]
})
