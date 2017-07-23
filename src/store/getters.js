export default {
    /**
     * Get all saved minyanimm.
     *
     * @param  {Object} state
     * @return {Minyan[]}
     */
    minyanim (state) {
        return state.minyanim
    },

    /**
     * Get the current user.
     *
     * @param  {Object} state
     * @return {User}
     */
    user (state) {
        return state.user
    }
}
