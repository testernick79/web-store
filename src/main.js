import Vue from 'vue'
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import Router from 'vue-router';

import App from './App.vue';


/* Vue.use( VueRouter )

const routes = [
  { path: '/about', component: About },
  { path: '/', component: Home }
] */

new Vue( {
  Router,
  el: '#app',
  render: h => h( App )
} )
