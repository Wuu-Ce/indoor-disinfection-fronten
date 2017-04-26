// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue';
import App from './App';

// APP样式
import './assets/css/bootstrap.css';
import './assets/css/app.css';
import './assets/css/font.css';
import './assets/css/font-awesome.min.css';
import './assets/css/simple-line-icons.css';

/* eslint-disable no-new */
new Vue({
  el: '#app',
  template: '<App/>',
  components: { App },
});
