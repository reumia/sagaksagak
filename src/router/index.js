import Vue from 'vue'
import Router from 'vue-router'
import store from '../store'

import Home from '@/components/pages/Home'
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
      name: 'Home',
      component: Home,
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
      },
      beforeEnter (to, from, next) {
        store.dispatch('FETCH_AUTH')
          // 인증된 경우 : 마이페이지
          .then(() => next({ name: 'MyPage' }))
          // 미인증, 인증만료된 경우 : 통과
          .catch(() => next())
      }
    },
    {
      path: '/user/sign-up',
      name: 'SignUp',
      component: SignUp,
      meta: {
        auth: false
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
        auth: false
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
  // 로그인이 불필요한 페이지 : 통과
  if (to.meta.auth === false) next()
  // 로그인이 필요한 페이지
  else {
    // 인증 동기화
    store.dispatch('FETCH_AUTH')
      // 인증된 경우 : 통과
      .then(() => next())
      // 미인증, 인증만료된 경우
      .catch(() => {
        // 로그아웃, 인증만료 처리
        store.dispatch('SIGN_OUT')
          // 로그인 페이지 이동
          .then(() => next({ name: 'SignIn' }))
          .catch(err => {
            console.warn(err.response.data)
            next({ name: 'SignIn' })
          })
      })
  }
})

export default router
