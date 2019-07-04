import Vue from 'vue';
import ElementUI from 'element-ui';
import App from './App.vue';
import router from '@/router/router';
import store from '@/store/index';
import '@/components/Index';
import '@/style/Index.scss';

Vue.use(ElementUI);
Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app');
