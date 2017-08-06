import { api, oauth } from '@/api'

export default {
    FETCH_USER: ({ commit }) => {
        return api.get('/user')
            .then(response => commit('SET_USER', { user: response.data }))
    },

    FETCH_MINYAN_LIST: ({ commit }, { filter }) => {
        return api.get('/minyanim', filter)
            .then(response => commit('SET_MINYANIM', { minyanim: response.data }))
    },

    FETCH_ATTENDANCES: ({ commit, dispatch, getters }) => {
        return dispatch('FETCH_USER')
            .then(() => getters.user.id)
            .then(userId => api.get(`/users/${userId}/minyanim`))
            .then(response => commit('SET_ATTENDANCES', { minyanimIds: response.data.map(m => m.id) }))
    },

    ATTEND_MINYAN: ({ commit, getters }, { minyan }) => {
        const minyanimIds = getters.attendances
        minyanimIds.push(minyan.id)

        return api.put(`users/${getters.user.id}/minyanim`, { minyan_id: minyan.id })
            .then(() => commit('SET_ATTENDANCES', { minyanimIds }))
    },

    CANCEL_ATTENDANCE_AT_MINYAN: ({ commit, getters }, { minyan }) => {
        const remainingMinyanimIds = getters.attendances
            .filter(id => id !== minyan.id)

        return api.delete(`users/${getters.user.id}/minyanim/${minyan.id}`)
            .then(() => commit('SET_ATTENDANCES', { minyanimIds: remainingMinyanimIds }))
    },

    LOGIN: ({ commit, dispatch }, { email, password }) => {
        return oauth.post('oauth/token', {
            'grant_type': 'password',
            'client_id': process.env.OAUTH.CLIENT_ID,
            'client_secret': process.env.OAUTH.CLIENT_SECRET,
            'username': email,
            'password': password
        }).then(response => {
            localStorage.setItem('sm.access_token', response.data.access_token)
        }).then(() => dispatch('FETCH_USER'))
    }

    // FETCH_ITEMS: ({ commit, state }, { ids }) => {
    //     // on the client, the store itself serves as a cache.
    //     // only fetch items that we do not already have, or has expired (3 minutes)
    //     const now = Date.now()
    //     ids = ids.filter(id => {
    //         const item = state.items[id]
    //         if (!item) {
    //             return true
    //         }
    //         if (now - item.__lastUpdated > 1000 * 60 * 3) {
    //             return true
    //         }
    //         return false
    //     })
    //     if (ids.length) {
    //         return fetchItems(ids).then(items => commit('SET_ITEMS', { items }))
    //     } else {
    //         return Promise.resolve()
    //     }
    // }
}
