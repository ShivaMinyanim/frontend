import Vue from 'vue'
import store from '@/store'
import routes from './routes'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const Router = new VueRouter({ mode: 'history', routes })

Router.beforeEach((to, from, next) => {
    if (to.path !== '/login') {
        // get the current user if there is a token saved
        // and make sure he is put in the store
        store.dispatch('FETCH_USER')
            .then(() => next())
            .catch(error => {
                // if you are not logged in for now
                // well just dump you back to the
                // home page until we decide what to do
                // with you
                if (error.response.status === 401) {
                    next('/login')
                }
            })
    }
    next()
})

export default Router
