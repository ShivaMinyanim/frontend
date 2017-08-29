<template>
    <section class="card">
        <h2>{{ name }}</h2>
        <h5 class="text--color-secondary">{{ address }}</h5>
    </section>
</template>

<script>
export default {
    props: {
        house: Object
    },

    computed: {
        name () {
            return this.house.residence_name
        },

        address () {
            return `${this.house.street} ${this.house.city}, ${this.house.state}`
        }
    },

    mounted () {
        console.log(this.house)
    }
}
</script>

<style scoped lang="stylus">
    .card
        background white
        border-radius 4px
        box-shadow 0 -1px 1px 0 rgba(0, 0, 0, .05), 0 1px 2px 0 rgba(0, 0, 0, .2)
        height 300px
        padding 20px
        width 350px

        h2, h5
            margin 0
</style>
