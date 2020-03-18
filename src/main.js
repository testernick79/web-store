import Vue from 'vue'

import router from './router'

import App from './App.vue'


/* Vue.use( VueRouter )

const routes = [
  { path: '/about', component: About },
  { path: '/', component: Home }
] */

new Vue( {
  router: router,
  el: '#app',
  render: h => h( App )
} )
