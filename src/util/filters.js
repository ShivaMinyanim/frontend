import moment from 'moment'

/**
 * Converts a UTC timestamp to a human
 * readable time of day (ex: 7:30 AM).
 *
 * @param  {String} timestamp
 * @return {String}
 */
export function time (timestamp) {
    return moment(timestamp).format('h:mm A')
}
