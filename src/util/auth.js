const user = {
    attending: [],

    isAttending (minyan) {
        return this.attending.indexOf(minyan.id) > -1
    },

    attend (minyan) {
        this.attending.push(minyan.id)
    },

    cancelAttendanceAt (minyan) {
        this.attending.splice(this.attending.indexOf(minyan.id), 1)
    }
}

export default class Auth {
    user () {
        return user
    }
}

Auth.install = function (Vue, options) {
    Vue.prototype.$auth = new Auth()
}
