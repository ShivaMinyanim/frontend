import Vue from 'vue'
import App from '@/App'
import store from '@/store'
import router from '@/router'
import * as filters from '@/util/filters'

// set the production tip
Vue.config.productionTip = false

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
