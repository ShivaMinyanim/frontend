<template>
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
</template>

<script>

import time from '../mixins/timeFilter'

export default {
    name: 'next',

    mixins: [time],

    data () {
        return {
            minyanim: [
                {
                    type: 'Shacharis',
                    house: {
                        street: '123 Main St.',
                        city: 'Teaneck',
                        state: 'NJ',
                        zip: '07666'
                    },
                    timestamp: '2016-12-27 07:30:00'
                },
                {
                    type: 'Mincha',
                    house: {
                        street: '123 Main St.',
                        city: 'Teaneck',
                        state: 'NJ',
                        zip: '07666'
                    },
                    timestamp: '2016-12-27 16:00:00'
                }
            ]
        }
    }
}
</script>
