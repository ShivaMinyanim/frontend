import Vue from 'vue'
import App from '@/App'
import router from '@/router'
import * as filters from '@/util/filters'

Vue.config.productionTip = false

// register global utility filters.
Object.keys(filters).forEach(key => {
    Vue.filter(key, filters[key])
})

/*
|--------------------------------------------------------------------------
| Mount The Application
|--------------------------------------------------------------------------
|
| Finally, we will create a fresh Vue component which will serve as the
| application instance and we will mount it to the DOM. All future
| components we create will be children of this root instance.
|
*/

/* eslint-disable no-new */
new Vue({
    el: '#app',
    router,
    render: h => h(App)
})
