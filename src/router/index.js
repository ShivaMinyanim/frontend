import Vue from 'vue'
import store from '@/store'
import routes from './routes'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const Router = new VueRouter({ mode: 'history', routes })

Router.beforeEach((to, from, next) => {
    // get the current user if there is a token saved
    // and make sure he is put in the store
    store.dispatch('FETCH_USER')
        .then(() => next())
})

export default Router
