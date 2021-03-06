import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
    routes: [
        {
            path: '/',
            name: 'home',
            component: () => import('@/views/Home')
        },
        {
            path: '/about',
            name: 'about',
            component: () => import('@/views/About')
        },
        {
            path: '/monitor',
            name: 'monitor',
            component: () => import('@/views/Monitor')
        },
    ]
})
