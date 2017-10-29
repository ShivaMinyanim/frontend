export default {
    /**
     * Get the shiva houses with their minyanim.
     *
     * @param {Object} state
     */
    houses (state) {
        // pluck the houses off each of the minyanim
        // and create a map for future lookup by id
        const housesMap = state.minyanim.reduce((all, minyan) => {
            return all.set(minyan.house_id, minyan.house)
        }, new Map())

        // collect minyanim by house and attach them
        // to their corresponding house object
        state.minyanim.forEach(minyan => {
            const house = housesMap.get(minyan.house_id)

            // initialization step for our new prop
            if (!Array.isArray(house.minyanim)) {
                house.minyanim = []
            }

            house.minyanim.push(minyan)
        })

        return Array.from(housesMap.values())
    }
}
