// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App' 
import router from './router/index.js'   //需要添加路由路径
import iview from 'iview'
import 'iview/dist/styles/iview.css';

//设置vue-resource
// import VueResource from 'vue-resource'
// Vue.use(VueResource)
// Vue.http.options.root = 'http://127.0.0.1:8081';
// Vue.http.options.emulateJSON = true;    //设置请求头Content-Type的值为application/x-www-form-urlencoded



import axios from 'axios'
Vue.prototype.$ajax = axios

Vue.use(iview);

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app4',
  router,        //使用路由组件
  components: { App },
  template: '<App/>'
})




