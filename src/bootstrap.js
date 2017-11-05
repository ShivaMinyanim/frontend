import Vue from 'vue'
import App from '@/App'
import store from '@/store'
import router from '@/router'
import * as filters from '@/util/filters'

import Header from '@/components/Header'
import DateNav from '@/components/DateNav'
import Dropdown from '@/components/Dropdown'
import HouseCard from '@/components/HouseCard'
import MinyanRow from '@/components/MinyanRow'
import SubHeader from '@/components/SubHeader'

// register components
Vue.component('sm-header', Header)
Vue.component('date-nav', DateNav)
Vue.component('dropdown', Dropdown)
Vue.component('house-card', HouseCard)
Vue.component('minyan-row', MinyanRow)
Vue.component('sub-header', SubHeader)

// set the production tip
Vue.config.productionTip = false

// before we are ready to create the actual application instance
// we first need to add some behaviors and functionality to
// the vue prototype so the instance will be customized to our application.

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
