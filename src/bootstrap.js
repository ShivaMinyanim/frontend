import Vue from 'vue'
import App from '@/App'
import store from '@/store'
import router from '@/router'
import Auth from '@/util/auth'
import * as filters from '@/util/filters'
import globalData from '@/util/globalData'

// set the production tip
Vue.config.productionTip = false

// register the auth plugin
Vue.use(Auth)

// register global utility filters
Object.keys(filters).forEach(key => {
    Vue.filter(key, filters[key])
})

// register global data
Vue.use(globalData)

// create the app instance
const app = new Vue({
    router,
    store,
    render: h => h(App)
})

// mount the application
app.$mount('#app')
