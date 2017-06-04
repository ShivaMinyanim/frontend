import Vue from 'vue'
import Router from 'vue-router'

import Welcome from '@/views/Welcome'
import NextMinyanim from '@/views/NextMinyanim'

Vue.use(Router)

export default new Router({
    mode: 'history',
    routes: [
        { path: '/', component: Welcome },
        { path: '/next-minyanim', component: NextMinyanim }
    ]
})
