import Vue from 'vue'
import Router from 'vue-router'
import Intro from '@/components/pages/Intro'
import SignIn from '@/components/pages/SignIn'
import SignUp from '@/components/pages/SignUp'
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
      path: '/user/sign-in',
      name: 'SignIn',
      component: SignIn
    },
    {
      path: '/user/sign-up',
      name: 'SignUp',
      component: SignUp
    },
    {
      path: '/user/:id',
      name: 'User',
      component: User,
      props: true
    },
    {
      path: '/user/reset-password',
      name: 'ResetPassword',
      component: SignIn
    },
    {
      path: '/cut/:id',
      name: 'Cut',
      component: Cut,
      props: true
    },
    {
      path: '/comic/:id',
      name: 'Comic',
      component: Comic,
      props: true
    }
  ]
})
