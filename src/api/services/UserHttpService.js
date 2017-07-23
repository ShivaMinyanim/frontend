import User from '../models/User'
import HttpService from './HttpService'

export default class UserHttpService extends HttpService {
    /**
     * The API URI this service points to.
     *
     * @type {String}
     */
    static path = '/user'

    /**
     * The Model object this service creates.
     *
     * @type {User}
     */
    static Model = User
}
