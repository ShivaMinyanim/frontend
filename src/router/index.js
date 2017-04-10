import Vue from 'vue'
import Router from 'vue-router'
import Hello from '@/components/Hello'
import UpcomingMinyanim from '@/components/UpcomingMinyanim'

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
      path: '/upcoming-minyanim',
      name: 'Upcoming',
      component: UpcomingMinyanim
    }
  ]
})
