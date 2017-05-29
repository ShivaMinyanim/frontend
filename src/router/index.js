import Vue from 'vue'
import Router from 'vue-router'
import routes from './routes'

/**
 * Register VueRouter with our application.
 */
Vue.use(Router)

/**
 * Create the instance of VueRouter we
 * will be using in our application.
 */
export default new Router({
    routes,
    mode: 'history'
})
