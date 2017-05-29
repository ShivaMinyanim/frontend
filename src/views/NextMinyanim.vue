<template>
    <div>
        <div class="sub-heading">
            <i class="fa fa-chevron-left" @click="previous()"></i>
                {{ secularDate }} -- {{ hebrewDate }}
            <i class="fa fa-chevron-right" @click="next()"></i>
        </div>
        <div class="container center">
            <section class="minyan-list">
                <article class="minyan-list--item" v-for="minyan in minyanim">
                    <div class="minyan-description">
                        <h3>{{ minyan.type }}</h3>
                        <span class="secondary text--color-secondary">{{ minyan.house.street }} {{ minyan.house.city }}, {{minyan.house.state }}</span>
                    </div>
                    <div class="minyan-time">
                        <h3>{{ minyan.timestamp | time }}</h3>
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
import axios from 'axios'

import time from '@/mixins/timeFilter'
import MinyanHttpService from '@/http/services/MinyanHttpService'

export default {
    mixins: [time],

    data () {
        return {
            minyanim: [],

            secularDate: moment().format('MMM D, YYYY'),
            hebrewDate: ''
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
        const filter = { year: '2017', month: '5', day: '14' }
        MinyanHttpService.get(filter).then(minyanim => this.minyanim = minyanim)

        // MinyanHttpService.getByDate(today).then(minyanim => this.minyanim = minyanim)

        let year = moment().format('YYYY')
        let month = moment().format('M')
        let day = moment().format('D')

        // zman(today).hebrew().format('M D, Y')

        axios.get(`http://www.hebcal.com/converter/?cfg=json&gy=${year}&gm=${month}&gd=${day}&g2h=2`).then(response => {
            let date = response.data
            // this.hebrewDate = `${date.hd} ${date.hm}, ${date.hy}`
            this.hebrewDate = date.hebrew
        })
    }
}
</script>
