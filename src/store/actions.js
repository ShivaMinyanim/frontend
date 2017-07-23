import UserHttpService from '@/api/services/UserHttpService'
import MinyanHttpService from '@/api/services/MinyanHttpService'

// import User from '@/api/models/User'
// import Users from '@/api/resources/Users'

export default {
    FETCH_USER: ({commit, dispatch, state}) => {
        return UserHttpService.get()
            .then(user => commit('SET_USER', { user }))
    },

    FETCH_MINYAN_LIST: ({ commit, dispatch, state }, { filter }) => {
        return MinyanHttpService.get(filter)
            .then(minyanim => commit('SET_MINYANIM', { minyanim }))
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
