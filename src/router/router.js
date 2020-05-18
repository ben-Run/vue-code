import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/views/home/Index.vue'

Vue.use(Router);

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home,
    },
    {
      path: '/render',
      name: 'renderIndex',
      component: () => import(/* webpackChunkName: "renderTest" */ '@/views/renderTest/Index.vue')
    },
    {
      path: '/product',
      name: 'productIndex',
      component: () => import(/* webpackChunkName: "renderTest" */ '@/views/testViews/product/Index.vue'),
      redirect: '/product/list',
      children: [
        {
          path: 'list',
          name: 'productList',
          component: () => import(/* webpackChunkName: "renderTest" */ '@/views/testViews/product/List.vue')
        },
        {
          path: 'detail',
          name: 'productDetail',
          component: () => import(/* webpackChunkName: "renderTest" */ '@/views/testViews/product/Detail.vue')
        }
      ]
    },
    {
      path: '/prodectDetail',
      name: 'productNewDetail',
      component: () => import(/* webpackChunkName: "renderTest" */ '@/views/testViews/product/Detail.vue')
    }
  ],
});
