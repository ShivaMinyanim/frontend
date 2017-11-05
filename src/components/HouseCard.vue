<template>
    <section class="card">
        <h2>{{ name }}</h2>
        <h5 class="text--color-secondary">{{ address }}</h5>
        <div class="details">
            <div v-for="minyan in orderedMinyanim" class="text--color-secondary row">
                <span class="capitalize">{{ minyan.type }}</span>
                <span>{{ minyan.timestamp | time }}</span>
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
                minyanim: this.house.minyanim
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
    .card
        background white
        border-radius 4px
        box-shadow 0 -1px 1px 0 rgba(0, 0, 0, .05), 0 1px 2px 0 rgba(0, 0, 0, .2)
        height 200px
        padding 20px
        width 350px

        h2, h5
            margin 0

    .details
        margin-top 20px

    .row
        display flex
        justify-content space-between
        font-size 1.1em
        line-height 1.6em
</style>
