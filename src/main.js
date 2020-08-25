// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import Router from 'vue-router'
import VueParticles from 'vue-particles'
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css'
import http from 'axios'
import vueSwiper from 'vue-awesome-swiper'
import 'swiper/dist/css/swiper.css'
import iView from 'iview'    //引入ivew库
import 'iview/dist/styles/iview.css'    // 使用 CSS

import BaiduMap from 'vue-baidu-map' // 引入百度地图
import AMap from 'vue-amap' // 引入高德地图

Vue.config.productionTip = false;
Vue.config.silent = true;
Vue.use(VueParticles);
Vue.use(ElementUI);
Vue.use(vueSwiper);
Vue.use(iView);

const originalPush = Router.prototype.push
Router.prototype.push = function push(location) {
  return originalPush.call(this, location).catch(err => err)
}

Vue.use(BaiduMap, {
  ak: 'dRYTpVW0oNYgZlRt71CiFk6DYiA0amt5'    //ak密钥
})

Vue.use(AMap);

//引入echarts
import echarts from 'echarts'
import 'echarts/map/js/china'
Vue.prototype.$echarts = echarts;

//引入swiper
// import swiper from 'swiper'
// Vue.prototype.$swiper = swiper;
import VueAwesomeSwiper from 'vue-awesome-swiper'
import '../node_modules/swiper/dist/css/swiper.css'
Vue.use(VueAwesomeSwiper)

import VueJsonp from 'vue-jsonp'
Vue.use(VueJsonp)
Vue.config.productionTip = false;
Vue.prototype.$http = http;

import http1 from './libs/http'
Vue.use(http1)

//引入lib-flexible
import 'lib-flexible'

//引入highcharts
import highcharts from 'highcharts'
import VueHighCharts from 'vue-highcharts'
import highcharts3d from 'highcharts/highcharts-3d'
Vue.use(VueHighCharts)
highcharts3d(highcharts)

//引入axios
import axios from 'axios'
import { post,get,put,patch } from './request/http'
Vue.prototype.$post = post;
Vue.prototype.$get = get;
Vue.prototype.$put = put;
Vue.prototype.$patch = patch;

// 节流和防抖
import './directives'

//页面访问权限
// router.beforeEach((to, from, next) => {
//   console.log('上一个页面:', from)
//   console.log('下一个页面:', to)
//   let userToken = localStorage.getItem('userToken')
//   let role = localStorage.getItem('role')
//   if(to.meta.requireAuth) {
//     //判断该路由是否需要登录权限
//     console.log('main-token', userToken)
//     if(userToken) {
//       //判断本地是否存在token
//       if(to.meta.roles.length !== 0) {
//         for(let i = 0; i < to.meta.roles.length; i++) {
//           if (role === to.meta.roles[i]) {
//             next()
//             break
//           } else if (i === to.meta.roles.length - 1) {
//             next({
//               path: '/Error'
//             })
//           }
//         }
//       } else {
//         next()
//       }
//     } else {
//       next({
//         path: '/secretaryPage'
//       })
//     }
//   } else {
//     next()
//   }
//   //如果本地存在token,则不允许直接跳转到登录页面
//   if (to.fullPath === '/Login') {
//     if (userToken) {
//       next({
//         path: from.fullPath
//       })
//     } else {
//       next()
//     }
//   }
// })
import store from './store/store'

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  //store,
  components: { App },
  template: '<App/>'
})
