import Vue from 'vue';
import Router from 'vue-router';
import HelloWorld from '@/components/HelloWorld';
import HomePage from '@/components/home/HomePage';

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      name: 'default',
      component: HelloWorld,
    },
    {
      path: '/home',
      name: 'homePage',
      component: HomePage,
    },
  ],
  mode: 'history',
});
