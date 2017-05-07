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

import time from '@/mixins/timeFilter'
import MinyanHttpService from '@/http/MinyanHttpService'

export default {
    name: 'next',

    mixins: [time],

    data () {
        return {
            minyanim: []
        }
    },

    mounted () {
        // MinyanService.get().then(minyanim => this.minyanim = minyanim)
        MinyanHttpService.get().then(minyanim => console.log(minyanim))
    }
}
</script>
