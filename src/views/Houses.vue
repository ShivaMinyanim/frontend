<template>
    <div>
        <sub-header>
            <div class="icon-container">
                <i v-if="dayOffset > MIN_OFFSET" class="fa fa-chevron-left" @click="previous()"></i>
            </div>
            <span>{{ secularDate }} &mdash; {{ hebrewDate }}</span>
            <div class="icon-container">
                <i v-if="dayOffset < MAX_OFFSET" class="fa fa-chevron-right" @click="next()"></i>
            </div>
        </sub-header>
        <div class="container center card-list">
            <house-card
                class="card"
                :house="house"
                :key="house.id"
                v-for="house in houses">
            </house-card>
            <p v-if="!houses.length">No Minyanim for this day.</p>
        </div>
    </div>
</template>

<script>
import moment from 'moment'

import zman from '@/util/zman'
import SubHeader from '@/components/SubHeader'
import HouseCard from '@/components/HouseCard'

export default {
    components: { SubHeader, HouseCard },

    data () {
        return {
            houses: [],
            dayOffset: '0',

            MIN_OFFSET: 0,
            MAX_OFFSET: 8
        }
    },

    computed: {
        date () {
            return moment().add(this.dayOffset, 'days')
        },

        secularDate () {
            return this.date.format('MMM D, YYYY')
        },

        hebrewDate () {
            return zman(this.date).format('D M, Y')
        }
    },

    methods: {
        next () {
            this.dayOffset++
            this.updateHousesList()
        },

        previous () {
            this.dayOffset--
            this.updateHousesList()
        },

        updateHousesList () {
            const date = {
                month: this.date.format('MM'),
                day: this.date.format('DD'),
                year: this.date.format('YYYY')
            }

            this.$store.dispatch('FETCH_HOUSE_LIST', { filter: date })
                .then(() => this.houses = this.$store.state.houses)
        }
    },

    mounted () {
        this.updateHousesList()
    }
}
</script>

<style scoped lang="stylus">
@import '../styles/variables'

.icon-container
    width 29px
    height 13px
    display inline-block

.fa
    cursor pointer
    transition transition-background-hover

    &-chevron-right
        padding-left 20px

    &-chevron-left
        padding-right 20px

    &:hover
        color white

.card-list
    margin-top 60px

    .card
        margin 0 30px 30px 0
</style>
