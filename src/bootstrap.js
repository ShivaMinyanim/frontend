import Vue from 'vue'
import App from '@/App'
import store from '@/store'
import router from '@/router'
import Auth from '@/util/auth'
import * as filters from '@/util/filters'

// set the production tip
Vue.config.productionTip = false

// before we are ready to create the actual application instance
// we first need to add some behaviors and functionality to
// the vue prototype so the instance will be customized to our application.

Vue.use(Auth)

// register global utility filters
Object.keys(filters).forEach(key => {
    Vue.filter(key, filters[key])
})

// create the app instance
const app = new Vue({
    router,
    store,
    render: h => h(App)
})

// mount the application
app.$mount('#app')
