// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import i18n from './i18n/i18n'
import axios from 'axios';

import NProgress from 'nprogress'
import 'nprogress/nprogress.css'

// Import the Vue Route module for registering routes
import router from './router'

// Import the vue resource module for making HTTP request ( like POST / GET etc )
import Resource from 'vue-resource'

// import { library } from '@fortawesome/fontawesome-svg-core'
// import { fas } from '@fortawesome/free-solid-svg-icons'
// import { far } from '@fortawesome/free-regular-svg-icons'
// import { fab } from '@fortawesome/free-brands-svg-icons'
// import { FontAwesomeIcon, FontAwesomeLayers, FontAwesomeLayersText } from '@fortawesome/vue-fontawesome'
 
// library.add(fas, far, fab)
// library.add(fas)
 
// Vue.component('font-awesome-icon', FontAwesomeIcon)
// Vue.component('font-awesome-layers', FontAwesomeLayers)
// Vue.component('font-awesome-layers-text', FontAwesomeLayersText)



// axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded';

Vue.prototype.$axios = axios;


// for graphs
import Trend from 'vuetrend'
Vue.use(Trend)

// charts
import Chartkick from 'chartkick'
import VueChartkick from 'vue-chartkick'
import Chart from 'chart.js'
Vue.use(VueChartkick, { Chartkick })

// Registering view plugins
Vue.use(Resource)

// Import global Vue compoments
import navBar from './components/Navbar'
Vue.component('app-navbar', navBar)

// Global filters
// This pulls in some random number
Vue.filter('randomNumber', function(value) {
  return Math.floor(Math.random() * (value - 1 + 1)) + 1
})

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  i18n,
  components: { App },
  template: '<App/>'
})


router.beforeEach((to, from, next) => {
    NProgress.start();

  /* 路由发生变化修改页面title */
  if (to.meta.title) {
    document.title = to.meta.title + ' - N4Q';
  }else{
    document.title = "这里可以给默认标题";
 }
  
  // 百度统计
  if (to.path) {
      _hmt.push(['_trackPageview', to.fullPath]);
  }
  
    next();
})

router.afterEach(transition => {
    NProgress.done();
})





