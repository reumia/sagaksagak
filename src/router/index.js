import Vue from 'vue'
import Router from 'vue-router'
import store from '../store'

import Home from '@/components/pages/Home'
import SignIn from '@/components/pages/SignIn'
import SignUp from '@/components/pages/SignUp'
import Cut from '@/components/pages/Cut'
import AddCut from '@/components/pages/AddCut'
import Comic from '@/components/pages/Comic'
import AddComic from '@/components/pages/AddComic'
import User from '@/components/pages/User'
import UpdateUser from '@/components/pages/UpdateUser'

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
      path: '/sign-in',
      name: 'SignIn',
      component: SignIn,
      meta: {
        auth: false
      }
    },
    {
      path: '/sign-up',
      name: 'SignUp',
      component: SignUp,
      meta: {
        auth: false
      }
    },
    {
      path: '/user/update',
      name: 'UpdateUser',
      component: UpdateUser,
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
      path: '/cut/add',
      name: 'AddCut',
      component: AddCut,
      props: route => ({
        comicId: route.query.comicId,
        parentId: route.query.parentId
      }),
      meta: {
        auth: true
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
      path: '/comic/add',
      name: 'AddComic',
      component: AddComic,
      meta: {
        auth: true
      }
    },
    {
      path: '/comic/:id/update',
      name: 'UpdateComic',
      component: AddComic,
      props: true,
      meta: {
        auth: true
      }
    },
    {
      path: '/comic/:id',
      name: 'Comic',
      component: Comic,
      props: true,
      meta: {
        auth: false
      }
    },
    {
      path: '*',
      redirect: '/'
    }
  ]
})

router.beforeEach((to, from, next) => {
  // 페이지 진입시, 네비게이션 닫기
  store.commit('HIDE_GLOBAL_NAVIGATION')

  // 현재 접속 유저 체크
  if (Boolean(store.state.currentUser.id) === false) {
    store.dispatch('GET_CURRENT_USER')
      .then(() => next())
      .catch(() => {
        // 로그인이 불필요한 페이지 : 통과
        if (to.meta.auth === false) next()
        // 로그인이 필요한 페이지
        else {
          // 로그아웃, 인증만료 처리
          store.dispatch('SIGN_OUT')
          // 로그인 페이지 이동
            .then(() => next({ name: 'SignIn' }))
            .catch(err => {
              console.warn(err.response.data)
              next({ name: 'SignIn' })
            })
        }
      })
  } else {
    next()
  }
})

export default router
