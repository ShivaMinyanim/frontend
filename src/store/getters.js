export default {
    /**
     * Get all saved minyanimm.
     *
     * @param  {Object} state
     * @return {Array}
     */
    minyanim (state) {
        return state.minyanim
    },

    /**
     * Get the current user.
     *
     * @param  {Object} state
     * @return {Object}
     */
    user (state) {
        return state.user
    },

    /**
     * Get the minyanim the user is
     * currently attending.
     *
     * @param  {Object} state
     * @return {Array}
     */
    attendances (state) {
        return state.attendances
    }
}
