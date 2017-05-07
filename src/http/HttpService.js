import HttpClient from './HttpClient'

export default class HttpService {
    /**
     * Make a get request to this service's path and
     * map the response to this service's Model.
     *
     * @return {Promise<Model>}
     */
    static get () {
        return HttpClient
            .get(this.path)
            .then(response => response.data.data.map(result => new this.Model(result)))
    }
}
