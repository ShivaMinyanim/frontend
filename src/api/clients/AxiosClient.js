import axios from 'axios'

export default class AxiosClient {
    /**
     * An instance of the HTTP client we are currently using.
     */
    static client = axios.create({
        baseURL: process.env.API_URL
    })

    /**
     * Make a get request to a given URI.
     *
     * @return {Promise}
     */
    static get (path, params) {
        return this.client.post('http://shivaminyanim.dev/oauth/token', {
            'grant_type': 'password',
            'client_id': process.env.OAUTH.CLIENT_ID,
            'client_secret': process.env.OAUTH.CLIENT_SECRET,
            'username': 'ari@example.com',
            'password': 'secret'
        }).then(response => {
            return this.client.get(path, {
                headers: {
                    Authorization: 'Bearer ' + response.data.access_token
                }
            })
        })
        // return this.client.get(path, { params })
    }
}
