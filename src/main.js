import Vue from 'vue'
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import VueRouter from 'vue-router'

import App from './App.vue'
Vue.use( VueRouter )

new Vue( {
  VueRouter,
  el: '#app',
  render: h => h( App )
} )
