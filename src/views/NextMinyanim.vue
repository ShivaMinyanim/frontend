<template>
    <div>
        <sub-header>
            <i class="fa fa-chevron-left" @click="previous()"></i>
                {{ secularDate }} &mdash; {{ hebrewDate }}
            <i class="fa fa-chevron-right" @click="next()"></i>
        </sub-header>
        <div class="container center">
            <minyan-list :minyanim="minyanim"></minyan-list>
        </div>
    </div>
</template>

<script>
import moment from 'moment'

import zman from '@/util/zman'
import MinyanHttpService from '@/http/services/MinyanHttpService'

import SubHeader from '@/components/SubHeader'
import MinyanList from '@/components/MinyanList'

export default {
    components: { MinyanList, SubHeader },

    data () {
        return {
            minyanim: [],

            secularDate: moment().format('MMM D, YYYY'),
            hebrewDate: zman().format('D M, Y')
        }
    },

    methods: {
        next () {
            // display the next days minyanim
        },

        previous () {
            // display the previous days minyanim
        }
    },

    mounted () {
        // load all minyanim for this week
        // filter minyanim by today
        const filter = { year: '2017' }
        MinyanHttpService.get(filter).then(minyanim => this.minyanim = minyanim)

        // MinyanHttpService.getByDate(today).then(minyanim => this.minyanim = minyanim)
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
