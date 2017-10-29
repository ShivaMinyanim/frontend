export default {
    /**
     * Get the shiva houses with their minyanim.
     *
     * @param {Object} state
     */
    houses (state) {
        const housesMap = state.minyanim
            .slice()
            .reduce((all, minyan) => {
                return all.set(minyan.house_id, minyan.house)
            }, new Map())

        state.minyanim.forEach(minyan => {
            let house = housesMap.get(minyan.house_id)

            // TODO: should be part of APi
            if (!Array.isArray(house.minyanim)) {
                house.minyanim = []
            }

            house.minyanim.push(minyan)
        })

        return Array.from(housesMap.values())
    }
}
