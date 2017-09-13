import Vue from 'vue';
import Router from 'vue-router';
import Intro from '@/components/pages/Intro';
import Login from '@/components/pages/Login';
import Single from '@/components/pages/Single';
import Taxonomy from '@/components/pages/Taxonomy';

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Intro',
      component: Intro,
    },
    {
      path: '/user/login',
      name: 'Login',
      component: Login,
    },
    {
      path: '/user/join',
      name: 'Join',
      component: Login,
    },
    {
      path: '/user',
      name: 'UserIndex',
      component: Taxonomy,
    },
    {
      path: '/user/password',
      name: 'Password',
      component: Login,
    },
    {
      path: '/single',
      name: 'Single',
      component: Single,
    },
    {
      path: '/category',
      name: 'Category',
      component: Taxonomy,
    },
  ],
});
