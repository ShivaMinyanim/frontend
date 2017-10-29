<template>
    <div id="app">
        <sm-header></sm-header>
        <router-view></router-view>
    </div>
</template>

<script>
export default {
    name: 'app'
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
