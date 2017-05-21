import Vue from 'vue';
import Router from 'vue-router';
import Intro from '@/components/pages/Intro';
import Help from '@/components/pages/Help';

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Intro',
      component: Intro,
    },
    {
      path: '/help',
      name: 'Help',
      component: Help,
    },
  ],
});
