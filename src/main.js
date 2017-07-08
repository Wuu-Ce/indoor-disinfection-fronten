// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import VueResource from 'vue-resource'
Vue.use(VueResource)

//App框架
import './assets/app/css/bootstrap.css'
import './assets/app/css/animate.css'
import './assets/app/css//font-awesome.min.css'
import './assets/app/css/simple-line-icons.css'
import './assets/app/css/font.css'
import './assets/app/css/app.css'

Vue.config.productionTip = false

/* eslint-disable no-new */

/*Ajax 拦截器*/
Vue.http.interceptors.push(function(request, next) {
    this.showLoading = true
    next((response) => {
        this.showLoading = false;
        return response
    });
});

new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App }
})

