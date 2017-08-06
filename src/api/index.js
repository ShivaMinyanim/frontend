import axios from 'axios'

const api = axios.create({
    baseURL: process.env.API_URL + '/api'
})

api.interceptors.request.use(function (config) {
    const accessToken = localStorage.getItem('sm.access_token')

    config.headers.Authorization = `Bearer ${accessToken}`

    return config
}, function (error) {
    return Promise.reject(error)
})

const oauth = axios.create({
    baseURL: process.env.API_URL
})

export {
    api, oauth
}
