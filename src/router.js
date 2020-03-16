import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home'
import About from './views/About'

Vue.use( Router )

export default new Router( {
    mode: 'history',
    //base: process.env.Base_URL,
    routes: [
        {
            path: '/',
            name: 'home',
            component: Home
        },
        {
            path: '/about',
            name: 'about',
            component: About
        },
        {
            path: '*',
            redirect: '/'
        }

    ]
} )