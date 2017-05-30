import Hebcal from 'hebcal'

class Zman {
    /**
     * Create a new Hebrew date instance.
     *
     * @param  {HDate} date
     */
    constructor (date) {
        this.date = date
    }

    /**
     * Format the date as a string.
     *
     * @param  {string} formatters
     * @return {string}
     */
    format (formatters) {
        return formatters
            .replace('D', this._getDay())
            .replace('M', this._getMonth())
            .replace('Y', this._getYear())
    }

    /**
     * Convert the date's day to Hebrew.
     *
     * @return {string}
     */
    _getDay () {
        return Hebcal.gematriya(this.date.day)
    }

    /**
     * Convert the date's month to Hebrew.
     *
     * @return {string}
     */
    _getMonth () {
        return this.date.getMonthName('h')
    }

    /**
     * Convert the date's year to Hebrew.
     *
     * @return {string}
     */
    _getYear () {
        return Hebcal.gematriya(this.date.year, 3)
    }
}

/**
 * Expose the Zman class as a function so
 * that it can be used just like moment.
 *
 * @param  {mixed} args
 * @return {Zman}
 */
export default function (args) {
    return new Zman(new Hebcal.HDate(args))
}
