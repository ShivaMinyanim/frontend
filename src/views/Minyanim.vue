<template>
    <div>
        <sub-header>
            <date-nav :value="date" v-on:input="updateMinyanList($event)"></date-nav>
        </sub-header>
        <div class="container center">
            <section v-if="minyanim.length > 0" class="list">
                <minyan-row v-for="minyan in minyanim" :key="minyan.id" :minyan="minyan" ></minyan-row>
            </section>
            <p v-else>No Minyanim for this day.</p>
        </div>
    </div>
</template>

<script>
    import moment from 'moment'

    export default {
        data () {
            return {
                minyanim: [],
                date: moment()
            }
        },

        methods: {
            updateMinyanList (date) {
                const filter = {
                    month: date.format('MM'),
                    day: date.format('DD'),
                    year: date.format('YYYY')
                }

                this.$store.dispatch('FETCH_MINYAN_LIST', { filter })
                    .then(() => this.minyanim = this.$store.state.minyanim)
            }
        },

        mounted () {
            this.updateMinyanList(this.date)
            this.$store.dispatch('FETCH_ATTENDANCES')
        }
    }
</script>

<style scoped lang="stylus">
    .list
        margin 60px 0 0 0
        padding 0
        width 700px
</style>
