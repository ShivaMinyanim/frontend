export default {
    SET_USER: (state, { user }) => {
        state.user = user
    },

    SET_MINYANIM: (state, { minyanim }) => {
        state.minyanim = minyanim
    },

    SET_ATTENDANCES: (state, { minyanimIds }) => {
        state.attendances = minyanimIds
    }
}
