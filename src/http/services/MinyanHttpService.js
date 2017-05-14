import Minyan from '@/models/Minyan'
import HttpService from './HttpService'

export default class MinyanHttpService extends HttpService {
    /**
     * The API URI this service points to.
     *
     * @type {String}
     */
    static path = '/minyanim'

    /**
     * The Model object this service creates.
     *
     * @type {Minyan}
     */
    static Model = Minyan
}
