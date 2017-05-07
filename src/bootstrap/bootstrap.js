import Vue from 'vue'
import App from '@/App'
import router from '@/router'

Vue.config.productionTip = false

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
