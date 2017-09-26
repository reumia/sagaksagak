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

router.beforeEach(async (to, from, next) => {
  // TODO : 새로고침 시 State 초기화 되면서 권한 필요 페이지 모두다 로그인으로 redirect 되는 문제
  // https://stackoverflow.com/questions/43027499/vuex-state-on-page-refresh

  // 로그인이 불필요한 페이지 : 통과
  if (to.meta.auth === false) next()
  // 로그인이 필요한 페이지
  else {
    // 인증 동기화
    const result = await store.dispatch('FETCH_AUTH')

    // 인증된 경우 : 통과
    if (result === 'AUTHORIZED') next()
    // 인증해제된 경우 : 로그인
    else if (result === 'UNAUTHORIZED') next({name: 'SignIn'})
    // 나머지 경우 : 로그인
    else next({name: 'SignIn'})
  }
})

export default router
