import Vue from 'vue';
import ElementUI from 'element-ui';
import App from './App.vue';
import router from '@/router/router';
import store from '@/store/index';
import '@/components/Index';
import '@/style/Index.scss';
import svgIcon from '@/components/svgIcon'
import loadingDirective from '@/components/loading/index'
// 引入jshint用于实现js自动补全提示 
import jshint from "jshint";

// 编辑器
import { codemirror } from "vue-codemirror";
// import "codemirror/lib/codemirror.css";
// import setRem from '@/style/rem.js'

// mobile rem
// setRem(document, window)
// 引入jshint用于实现js自动补全提示 

window.JSHINT = jshint.JSHINT

Vue.use(ElementUI);
Vue.use(svgIcon)
Vue.use(loadingDirective)
Vue.use(codemirror);

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
