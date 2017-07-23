import Vue from 'vue'
import Vuex from 'vuex'
import actions from './actions'
import getters from './getters'
import mutations from './mutations'

// import User from '@/api/models/User'

Vue.use(Vuex)

export default new Vuex.Store({
    state: {
        user: false,
        minyanim: {/* [id: number]: Minyan */}
    },
    actions,
    mutations,
    getters
})
