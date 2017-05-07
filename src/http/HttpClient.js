import axios from 'axios'

export default class HttpClient {
    /**
     * The HTTP client we are currently using.
     */
    static client = axios.create({
        baseURL: process.env.API_URL
    })

    /**
     * Make a get request to a given URI.
     *
     * @return {Promise}
     */
    static get (path) {
        return this.client.get(path)
    }
}
