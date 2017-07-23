import Model from './Model'

export default class User extends Model {
    attending = [] // to be removed

    /**
     * Create a new User model.
     *
     * @param  {array} attributes
     * @return {void}
     */
    // constructor (attributes = []) {
    //     this.id = attributes.id
    // }

    isAttending (minyan) {
        return this.attending.indexOf(minyan.id) > -1
    }

    attend (minyan) {
        this.attending.push(minyan.id)
    }

    cancelAttendanceAt (minyan) {
        this.attending.splice(this.attending.indexOf(minyan.id), 1)
    }
}
