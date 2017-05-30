<template>
    <div>
        <div class="sub-heading">
            <i class="fa fa-chevron-left" @click="previous()"></i>
                {{ secularDate }} &mdash; {{ hebrewDate }}
            <i class="fa fa-chevron-right" @click="next()"></i>
        </div>
        <div class="container center">
            <section class="minyan-list">
                <article class="minyan-list--item" v-for="minyan in minyanim">
                    <div class="minyan-time">
                        <h3>{{ minyan.timestamp | time }}</h3>
                    </div>
                    <div class="minyan-description capitalize">
                        <h3>{{ minyan.type }}</h3>
                        <span class="secondary text--color-secondary">{{ minyan.house.street }} {{ minyan.house.city }}, {{minyan.house.state }}</span>
                    </div>
                    <div class="minyan-action">
                        <a class="button button--primary uppercase">Attend</a>
                    </div>
                </article>
            </section>
        </div>
    </div>
</template>

<script>

import moment from 'moment'

import zman from '@/zman'
import time from '@/mixins/timeFilter'
import MinyanHttpService from '@/http/services/MinyanHttpService'

export default {
    mixins: [time],

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
