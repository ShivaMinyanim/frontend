import HttpClient from '../clients/AxiosClient'

export default class HttpService {
    /**
     * Make a get request to this service's path and
     * map the response to this service's Model.
     *
     * @return {Promise<Model>}
     */
    static get (params) {
        return HttpClient
            .get(this.path, params)
            .then(response => response.data.data.map(result => new this.Model(result)))
    }
}
