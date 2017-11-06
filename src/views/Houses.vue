<template>
    <div>
        <sub-header>
            <date-nav :value="date" v-on:input="updateHouseList($event)"></date-nav>
        </sub-header>
        <div class="container center card-list">
            <house-card class="spacer" :house="house" :key="house.id" v-for="house in houses"></house-card>
            <p v-if="!houses.length">No Minyanim for this day.</p>
        </div>
    </div>
</template>

<script>
    import moment from 'moment'

    export default {
        data () {
            return {
                houses: [],
                date: moment()
            }
        },

        methods: {
            updateHouseList (date) {
                const filter = {
                    month: date.format('MM'),
                    day: date.format('DD'),
                    year: date.format('YYYY')
                }

                this.$store.dispatch('FETCH_HOUSE_LIST', { filter })
                    .then(() => this.houses = this.$store.getters.houses)
            }
        },

        mounted () {
            this.updateHouseList(this.date)
        }
    }
</script>

<style scoped lang="stylus">
    .card-list
        margin-top 60px

        .spacer
            margin-right 30px
</style>
