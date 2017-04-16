<template>
    <div id="app">
        <sm-header></sm-header>
        <router-view></router-view>
    </div>
</template>

<script>
import Header from './components/Header'

export default {
    name: 'app',
    components: {
        'sm-header': Header
    }
}
</script>

<style lang="stylus" src="./styles/app.styl"></style>
