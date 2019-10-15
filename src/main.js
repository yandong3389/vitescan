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
import footer from './components/Footer'
Vue.component('app-navbar', navBar)
Vue.component('app-footer', footer)

// Global filters
// This pulls in some random number
Vue.filter('randomNumber', function(value) {
  return Math.floor(Math.random() * (value - 1 + 1)) + 1
})

Vue.config.productionTip = false





//时间显示问题（几天前、几分钟前）
Vue.filter('fomatTime', function (valueTime,diffTime) {

  var newData =  Date.parse(new Date());
  // var diffTime = Math.abs(newData-valueTime);

  if (!valueTime && !diffTime){
      return "--";
  }

  if(valueTime){

    if (diffTime > 7 * 24 * 3600 * 1000) {
      var date = new Date(valueTime);
      var y = date.getFullYear();
      var m = date.getMonth() + 1;
      m = m < 10 ? ('0' + m) : m;
      var d = date.getDate();
      d = d < 10 ? ('0' + d) : d;
      var h = date.getHours();
      h = h < 10 ? ('0' + h) : h;
      var minute = date.getMinutes();
      var second = date.getSeconds();
      minute = minute < 10 ? ('1' + minute) : minute;
      second = second < 10 ? ('0' + second) : second;
      return  m + '-' + d+' '+h+':'+minute+":"+second;

    } else if (diffTime < 7 * 24 * 3600 * 1000 && diffTime > 24 * 3600 * 1000) {
      // //注释("一周之内");

      // var time = newData - diffTime;
      var dayNum = Math.floor(diffTime / (24 * 60 * 60 * 1000));
      return dayNum + " 天前";

    } else if (diffTime < 24 * 3600 * 1000 && diffTime > 3600 * 1000) {
      // //注释("一天之内");
      // var time = newData - diffTime;
      var dayNum = Math.floor(diffTime / (60 * 60 * 1000));
      return dayNum + " 小时前";

    } else if (diffTime < 3600 * 1000 && diffTime >= 60 * 1000) {
      // //注释("一小时之内");
      // var time = newData - diffTime;
      var dayNum = Math.floor(diffTime / (60 * 1000));
      return dayNum + " 分钟前";

    } else if (diffTime < 60 * 1000) {
      // //注释("一小时之内");
      // var time = newData - diffTime;
      var dayNum = Math.round(diffTime / 1000);
      // dayNum = dayNum+1;
      return dayNum + " 秒前";
    }
  }
});
Vue.filter('fomatDate', function (valueTime) {

  var newData =  Date.parse(new Date());
  // var diffTime = Math.abs(newData-valueTime);

  if(valueTime){
      var date = new Date(valueTime);
      var y = date.getFullYear();
      var m = date.getMonth() + 1;
      m = m < 10 ? ('0' + m) : m;
      var d = date.getDate();
      d = d < 10 ? ('0' + d) : d;
      var h = date.getHours();
      h = h < 10 ? ('0' + h) : h;
      var minute = date.getMinutes();
      var second = date.getSeconds();
      minute = minute < 10 ? ('1' + minute) : minute;
      second = second < 10 ? ('0' + second) : second;
      return  y + '-' + m + '-' + d+' '+h+':'+minute+":"+second;
  }
});
Vue.filter('fomatBlockType', function (blockType) {

  var newData =  Date.parse(new Date());
  // var diffTime = Math.abs(newData-valueTime);

  if(blockType == 1){
      return  'Contract Creation';
  } else if (blockType == 2) {
      return 'Send';
  } else if (blockType == 3) {
    return 'Reward';
  } else if (blockType == 4) {
    return 'Receive';
  } else if (blockType == 5) {
    return 'Receive Err';
  } else if (blockType == 6) {
    return 'Revert';
  } else if (blockType == 7) {
    return 'Genesis';
  }
});

Vue.filter('fomatNumber', function(num, digits) {
  const si = [
      { value: 1, symbol: "" },
      { value: 1E3, symbol: "K" },
      { value: 1E6, symbol: "M" },
      { value: 1E6, symbol: "M" },
      // { value: 1E9, symbol: "G" },
      { value: 1E12, symbol: "T" },
      { value: 1E15, symbol: "P" },
      { value: 1E18, symbol: "E" }
  ];
  const rx = /\.0+$|(\.[0-9]*[1-9])0+$/;
  let i;
  for (i = si.length - 1; i > 0; i--) {
      if (num >= si[i].value) {
          break;
      }
  }
  return (num / si[i].value).toFixed(digits).replace(rx, "$1") + si[i].symbol;

});

Vue.filter('fomatNumber3', function(num) {

  if (num > 999) {
    return (+num || 0).toString().replace(/^-?\d+/g, m => m.replace(/(?=(?!\b)(\d{3})+$)/g, ','));
  } else {
    return num;
  }
});
Vue.filter('fomatNumber18', function(num, x, digits) {
  return toNonExponential(parseFloat((num/Math.round(Math.pow(10,x))).toFixed(digits)));
});
Vue.filter('subAddrStr', function(addr, num) {

  let count = 6;
  if (num != null && num != undefined) {
    count = num;
  }
  var str1 = addr.substring(0,count);
  var str2 = "...";
  var str3 = addr.substring(addr.length-count, addr.length);
  return str1 + str2 + str3;
});
Vue.filter('blockTypeStr', function(blockType){
    if (blockType == 1
       || blockType == 2
       || blockType == 3
       || blockType == 6) {
        return "-";
    } else {
        return "+";
    }

});

function toNonExponential(num) {

  if (isNaN(num)) {
    return num;
  }

  // console.info(num);
  var m = num.toExponential().match(/\d(?:\.(\d*))?e([+-]\d+)/);
  var newNum = num.toFixed(Math.max(0, (m[1] || '').length - m[2]));
  // console.info(newNum);
  return newNum;
}


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
    document.title = to.meta.title + ' - ViteScan.io';
  }else{
    document.title = " - ViteScan.io";
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