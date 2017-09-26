import Vue from 'vue'
import Router from 'vue-router'
import store from '../store'

import Intro from '@/components/pages/Intro'
import SignIn from '@/components/pages/SignIn'
import SignUp from '@/components/pages/SignUp'
import Cut from '@/components/pages/Cut'
import Comic from '@/components/pages/Comic'
import User from '@/components/pages/User'
import MyPage from '@/components/pages/MyPage'

Vue.use(Router)

const router = new Router({
  routes: [
    {
      path: '/',
      name: 'Intro',
      component: Intro,
      meta: {
        auth: false
      }
    },
    {
      path: '/user/sign-in',
      name: 'SignIn',
      component: SignIn,
      meta: {
        auth: false
      }
    },
    {
      path: '/user/sign-up',
      name: 'SignUp',
      component: SignUp,
      meta: {
        auth: true
      }
    },
    {
      path: '/user/my-page',
      name: 'MyPage',
      component: MyPage,
      props: true,
      meta: {
        auth: true
      }
    },
    {
      path: '/user/reset-password',
      name: 'ResetPassword',
      component: SignIn,
      meta: {
        auth: true
      }
    },
    {
      path: '/user/:id',
      name: 'User',
      component: User,
      props: true,
      meta: {
        auth: false
      }
    },
    {
      path: '/cut/:id',
      name: 'Cut',
      component: Cut,
      props: true,
      meta: {
        auth: false
      }
    },
    {
      path: '/comic/:id',
      name: 'Comic',
      component: Comic,
      props: true,
      meta: {
        auth: true
      }
    },
    {
      path: '*',
      redirect: '/'
    }
  ]
})

router.beforeEach((to, from, next) => {
  if (to.meta.auth === false) next()
  else {
    console.log(`isAuthorized? ${store.getters.IS_AUTHORIZED}`)

    if (store.state.isAuthorized) next()
    else next({name: 'SignIn'})
  }
})

export default router
