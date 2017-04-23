import moment from 'moment'

/**
 * Exposes a 'time' pipe to any components
 * that import and use this mixin.
 */
const timeMixin = {
    filters: {
        /**
         * Converts a UTC timestamp to a human
         * readable time of day (ex: 7:30 AM).
         *
         * @param  {string} timestamp
         * @return {string}
         */
        time (timestamp) {
            return moment(timestamp).format('h:mm A')
        }
    }
}

export default timeMixin
