import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'


Vue.use( Router )

function lazyLoader( view ) {
    return () => import( `@/views/${ view }.vue` )
}

export default new Router( {
    mode: 'history',
    base: process.env.BASE_URL,
    routes: [
        {
            path: '/',
            name: 'home',
            component: Home
        },
        {
            path: '/about',
            name: 'about',
            component: lazyLoader( 'About' )
        },
        {
            path: '/store',
            name: 'Store',
            component: lazyLoader( 'Store' )
        }
    ]
} )