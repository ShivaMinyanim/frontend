<template>
    <div id="app">
        <sm-header></sm-header>
        <router-view></router-view>
    </div>
</template>

<script>
import Header from '@/components/Header'

export default {
    name: 'app',
    components: {
        'sm-header': Header
    }
}
</script>

<style lang="stylus">
@import './styles/buttons'
@import './styles/layout'
@import './styles/typography'

html, body
    margin 0
    background background
</style>
