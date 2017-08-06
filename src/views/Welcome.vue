<template>
    <div>
        <h1>Welcome to the app.</h1>
        <h3>You probably need to log in.</h3>
        <button @click="forceLogin()">Auto Log In</button>
    </div>
</template>

<script>
import api from '@/api'

export default {
    methods: {
        forceLogin () {
            api.post('http://shivaminyanim.dev/oauth/token', {
                'grant_type': 'password',
                'client_id': process.env.OAUTH.CLIENT_ID,
                'client_secret': process.env.OAUTH.CLIENT_SECRET,
                'username': 'ari@example.com',
                'password': 'secret'
            }).then(response => {
                localStorage.setItem('sm.access_token', response.data.access_token)
            })
        }
    }
}
</script>

<style scoped lang="stylus">
    div
        width 300px
        margin auto
        text-align center
</style>
