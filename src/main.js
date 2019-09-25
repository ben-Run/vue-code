import Vue from 'vue';
import ElementUI from 'element-ui';
import App from './App.vue';
import router from '@/router/router';
import store from '@/store/index';
import '@/components/Index';
import '@/style/Index.scss';
import svgIcon from '@/components/svgIcon'
import loadingDirective from '@/components/loading/index'

// import setRem from '@/style/rem.js'

// mobile rem
// setRem(document, window)
Vue.use(ElementUI);
Vue.use(svgIcon)
Vue.use(loadingDirective)
Vue.config.productionTip = false;

// all svg
const requireAll = requireContext => requireContext.keys().map(requireContext)
const req = require.context('./assets/icons', false, /\.svg$/)
requireAll(req)

new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app');
