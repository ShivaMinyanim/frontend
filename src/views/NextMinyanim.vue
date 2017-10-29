<template>
    <div>
        <sub-header>
            <date-nav :value="date" v-on:input="updateMinyanList($event)"></date-nav>
        </sub-header>
        <div class="container center">
            <minyan-list :minyanim="minyanim" v-if="minyanim.length > 0"></minyan-list>
            <p v-else>No Minyanim for this day.</p>
        </div>
    </div>
</template>

<script>
import moment from 'moment'

import SubHeader from '@/components/SubHeader'
import MinyanList from '@/components/MinyanList'
import DateNav from '@/components/DateNav'

export default {
    components: { MinyanList, SubHeader, DateNav },

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
    }
}
</script>
