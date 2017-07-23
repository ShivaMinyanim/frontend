export default class Auth {
    attempt (credentials) {
        // this.$store.dispatch('LOG_IN', { credentials })
            // .then()
    }
}

Auth.install = function (Vue, options) {
    Vue.prototype.$auth = new Auth()
}
