import Vue from 'vue';

import 'normalize.css';
import ElementUI from 'element-ui';
import '@/styles/index.scss';
import '@/permission';

import App from './App.vue';
import router from './router';
import store from './store';

Vue.use(ElementUI);

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount('#app');
