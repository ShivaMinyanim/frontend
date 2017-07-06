export default class Minyan {
    /**
     * Create a new Minyan model.
     *
     * @param  {array} attributes
     * @return {void}
     */
    constructor (attributes = []) {
        this.id = attributes.id
        this.type = attributes.type
        this.house = attributes.house
        this.timestamp = attributes.timestamp
    }
}
