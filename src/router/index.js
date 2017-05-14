import Vue from 'vue'
import Router from 'vue-router'
import Hello from '@/views/Hello'
import NextMinyanim from '@/views/NextMinyanim'

Vue.use(Router)

export default new Router({
    mode: 'history',
    routes: [
        {
            path: '/',
            component: Hello
        },
        {
            path: '/next-minyanim',
            component: NextMinyanim
        }
    ]
})
