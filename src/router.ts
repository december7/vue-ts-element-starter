import Vue from 'vue';
import Router from 'vue-router';

Vue.use(Router);

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'dashboard',
      redirect: '/goods',
    },
    {
      path: '/goods',
      name: 'goods',
      component: () => import('@/views/goods'),
    },
    {
      path: '/orders',
      name: 'orders',
      component: () => import('@/views/orders'),
    },
  ],
});
