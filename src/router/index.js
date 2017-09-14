import Vue from 'vue'
import Router from 'vue-router'
import Index from '@/components/pages/Index'
import Login from '@/components/pages/Login'
import Cut from '@/components/pages/Cut'
import Comic from '@/components/pages/Comic'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Index',
      component: Index
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
