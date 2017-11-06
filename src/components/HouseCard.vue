<template>
    <section class="card" :class="{ hover }" @mouseenter="hover = true" @mouseleave="hover = false">
        <h2>{{ name }}</h2>
        <h5 class="text--color-secondary">{{ address }}</h5>
        <div class="details">
            <div v-for="minyan in orderedMinyanim" class="text--color-secondary row">
                <span class="capitalize">{{ minyan.type }}</span>
                <span>{{ minyan.timestamp | time }}</span>
            </div>
        </div>
        <div class="overlay">
            <div class="inner">
                <button class="button--round card-button">Attend Minyanim</button>
            </div>
        </div>
    </section>
</template>

<script>
    export default {
        props: {
            house: Object
        },

        data () {
            return {
                minyanim: this.house.minyanim,
                hover: false
            }
        },

        computed: {
            name () {
                return this.house.residence_name
            },

            address () {
                return `${this.house.street} ${this.house.city}, ${this.house.state}`
            },

            orderedMinyanim () {
                return this.minyanim.sort((a, b) => a.timestamp < b.timestamp ? -1 : 1)
            }
        }
    }
</script>

<style scoped lang="stylus">
    @import '../styles/variables'

    padding = 20px

    .overlay
        background rgba(0, 0, 0, 0)
        border-radius 4px
        bottom 0
        left 0
        opacity 0
        padding padding
        position absolute
        right 0
        top 0
        transition all .2s ease
        visibility hidden

    .inner
        align-items center
        display flex
        height 100%
        justify-content center

    .hover .overlay
        background rgba(44, 44, 44, 0.9)
        cursor pointer
        display block
        opacity 1
        visibility visible

    .card
        background white
        border-radius 4px
        box-shadow 0 -1px 1px 0 rgba(0, 0, 0, .05), 0 1px 2px 0 rgba(0, 0, 0, .2)
        height 200px
        padding padding
        position relative
        transition all .2s ease
        width 350px

        h2, h5
            margin 0

    .hover.card
        box-shadow 0 4px 25px 0 rgba(0,0,0,.3), 0 0 1px 0 rgba(0,0,0,.25)
        transform translateY(-4px)

    .details
        margin-top 20px

    .row
        display flex
        font-size 1.1em
        justify-content space-between
        line-height 1.6em

    .card-button
        background none
        border 1px solid rgba(255, 255, 255, 0.4)
        color white
        font-size 10px
        font-weight 400
        height 36px
        letter-spacing 1px
        line-height 36px
        padding 0 40px
        text-transform uppercase

        &:hover
            background success
            border-color success
            box-shadow 0 2px 15px 0 rgba(0,0,0,.3), 0 0 1px 0 rgba(0,0,0,.25)
</style>
