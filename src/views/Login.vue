<template>
    <div class="container">
        <div class="heading">
            <h1>Sign in to ShivaMinyanim.</h1>
            Enter your details below.
        </div>
    
        <form v-on:submit.prevent="onSubmit">
            <div class="form-group">
                <label>Email Address</label>
                <input v-model="email" type="email" placeholder="reuvein@gmail.com">
            </div>
            <div class="form-group">
                <label>Password</label>
                <input v-model="password" type="password">
            </div>

            <button type="submit" class="button--primary form-button">Sign In</button>
        </form>
    </div>
</template>

<script>

export default {
    data () {
        return {
            email: '',
            password: ''
        }
    },

    methods: {
        onSubmit () {
            this.$store.dispatch('LOGIN', { email: this.email, password: this.password })
                .then(() => this.$router.push('/next-minyanim'))
        }
    }
}
</script>

<style scoped lang="stylus">
@import '../styles/variables'

.container
    margin auto
    width 500px

.heading
    margin-bottom 40px

.form-group
    margin-bottom 20px

    input
        border 1px solid border
        border-radius 3px
        box-sizing border-box
        display block
        font-size 14px
        height 50px
        outline 0
        padding 15px
        width 100%

        &::placeholder
            color border

.form-button
    border-radius 100px
    color white
    cursor pointer
    font-family 'Open Sans', sans-serif
    font-size 11px
    font-weight 600
    height 50px
    letter-spacing .8px
    line-height 50px
    margin 20px auto
    padding 0 60px
    text-transform uppercase
</style>
