<template>
    <header class="header">
        <div class="container">
            <nav class="links">
                <div class="links--left">
                    <router-link to="/next-minyanim" class="uppercase text--color-secondary">Minyanim</router-link>
                    <router-link to="/shiva-houses" class="uppercase text--color-secondary">Houses</router-link>
                </div>
                <div class="links--right">
                    <router-link to="/donate" class="uppercase text--color-accent donate">Donate</router-link>
                    <a href="javascript:void(0)" @click="toggleDropdown()" class="text--color-secondary carrot--after-down capitalize">{{ user.name }}</a>
                    <dropdown :visible="isDropdownOpen">
                        <a href="javascript:void(0)" @click="logout()">Sign Out</a>
                    </dropdown>
                </div>
            </nav>
            <div class="page-title--container">
                <div class="logo--container">
                    <img src="/static/logo.svg" class="logo">
                </div>
                <h1>Next Minyanim</h1>
            </div>
        </div>
    </header>
</template>

<script>
import Dropdown from '@/components/Dropdown'

export default {
    components: { Dropdown },

    data () {
        return {
            isDropdownOpen: false
        }
    },

    computed: {
        user () {
            return this.$store.getters.user
        }
    },

    methods: {
        toggleDropdown () {
            this.isDropdownOpen = !this.isDropdownOpen
        },

        logout () {
            this.$store.dispatch('LOGOUT')
                .then(() => this.$router.push('/'))

            this.closeDropdown()
        },

        closeDropdown () {
            this.isDropdownOpen = false
        }
    }
}
</script>

<style scoped lang="stylus">
@import '../styles/variables'

.header
    background primary
    color white

.links
    display flex
    height 58px
    align-items center
    justify-content space-between
    font-size 10px
    font-weight 600
    letter-spacing .85px
    position relative

    &--left > a
            margin-right 45px

    &--right > a
            margin-left 45px

    a
        text-decoration none
        transition transition-background-hover

        &:not(.donate):hover
            color white

        &.donate:hover
            text-decoration underline

    .router-link-active
        color white

.page-title--container
    display flex
    padding-bottom 20px

    .logo--container
        display flex
        align-items center
        margin-left -75px
        padding-right 25px

        .logo
            border-right 1px solid rgba(55,62,77,.56)
            height 28px
            padding 5px 25px 5px 0
</style>
