class DataPlugin {}

DataPlugin.install = function (Vue, options) {
    Vue.mixin({
        data () {
            return {
                get user () {
                    return Vue.prototype.$auth.user()
                }
            }
        }
    })
}

export default DataPlugin
