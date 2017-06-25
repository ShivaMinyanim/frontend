<template>
    <div>
        <sub-header>
            <i class="fa fa-chevron-left" @click="previous()"></i>
                {{ secularDate }} &mdash; {{ hebrewDate }}
            <i class="fa fa-chevron-right" @click="next()"></i>
        </sub-header>
        <div class="container center">
            <minyan-list :minyanim="minyanim" v-if="minyanim.length > 0"></minyan-list>
            <p v-else>No Minyanim for this day.</p>
        </div>
    </div>
</template>

<script>
import moment from 'moment'

import zman from '@/util/zman'
import SubHeader from '@/components/SubHeader'
import MinyanList from '@/components/MinyanList'

export default {
    components: { MinyanList, SubHeader },

    data () {
        return {
            minyanim: [],
            dayOffset: '0'
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
            this.updateMinyanList()
        },

        previous () {
            this.dayOffset--
            this.updateMinyanList()
        },

        updateMinyanList () {
            const date = {
                month: this.date.format('MM'),
                day: this.date.format('DD'),
                year: this.date.format('YYYY')
            }

            this.$store.dispatch('FETCH_MINYAN_LIST', { filter: date })
                .then(() => this.minyanim = this.$store.getters.minyanim)
        }
    },

    mounted () {
        this.updateMinyanList()
    }
}
</script>

<style scoped lang="stylus">
@import '../styles/variables'

.fa
    cursor pointer
    transition transition-background-hover

    &-chevron-right
        padding-left 20px
    &-chevron-left
        padding-right 20px
    &:hover
        color white
</style>
