import router from './router';
import NProgress from 'nprogress';
import 'nprogress/nprogress.css';
import { getToken } from '@/utils/auth';
import { Route } from 'vue-router';

router.beforeEach((to: Route, from: Route, next: any) => {
  NProgress.start();
  if (getToken()) {
    next();
  } else {
    next();
  }
});

router.afterEach(() => {
  NProgress.done();
});
