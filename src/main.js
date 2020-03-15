import Vue from 'vue'
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import Router from 'vue-router';
import Hats from './components/Hats.vue';
import App from './App.vue';


new Vue( {
  Router,
  el: '#app',
  render: h => h( App, Hats )
} )
