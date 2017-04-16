import Vue from 'vue'
import Router from 'vue-router'
import Hello from '@/components/Hello'
import NextMinyanim from '@/components/NextMinyanim'

Vue.use(Router)

export default new Router({
    mode: 'history',
    routes: [
        {
            path: '/',
            name: 'Hello',
            component: Hello
        },
        {
            path: '/next-minyanim',
            name: 'Next',
            component: NextMinyanim
        }
    ]
})
