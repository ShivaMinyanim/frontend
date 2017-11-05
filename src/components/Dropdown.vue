<template>
    <transition name="dropdown">
        <div v-if="visible" class="dropdown">
            <slot></slot>
        </div>
    </transition>
</template>

<script>
    export default {
        data () {
            return {
                visible: false
            }
        },

        methods: {
            open () {
                this.visible = true
            },

            close () {
                this.visible = false
            },

            toggle () {
                this.visible = !this.visible
            }
        }
    }
</script>

<style scoped lang="stylus">
    .dropdown
        background white
        box-shadow 0 0 1px rgba(76,86,103,.25), 0 2px 18px rgba(31,37,50,.32)
        left auto
        margin 35px 0
        padding 33px 34px 23px 34px
        position absolute
        right -34px
        width 272px
        z-index 1000
        // opacity 0

    .dropdown-enter, .dropdown-leave-to
        opacity 0
        // transform translate3d(0, 0, 0)
        // transition opacity .4s cubic-bezier(0, 1, 0.5, 1)
        // transition transform ease

    .dropdown-enter-active, .dropdown-leave-active
        // transform translate3d(0, -20px, 0)
        transition opacity ease
        // opacity 0
        // transition opacity .4s cubic-bezier(0, 1, 0.5, 1)
        // transition all .4s cubic-bezier(0, 1, 0.5, 1)

</style>
