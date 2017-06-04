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

import zman from '@/util/zman'
import MinyanHttpService from '@/http/services/MinyanHttpService'

export default {
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
// sub heading
@import '../styles/variables'

.sub-heading
  background primary
  color #898F9A
  text-align center
  font-size 13px
  padding-bottom 20px

  .fa
    cursor pointer
    transition transition-background-hover
    
    &-chevron-right
      padding-left 20px
    &-chevron-left
      padding-right 20px
    &:hover
      color white 

// minyan list
.minyan-list
  margin 60px 0 0 0
  padding 0
  width 700px
  
  h2
    font-size 14px
    text-align center
    
    .fa
      font-size 12px
      
      &-chevron-right
        padding-left 20px
        
      &-chevron-left
        padding-right 20px

  &--item
    display flex
    justify-content space-between
    padding 33px 0
  
    &:not(:first-of-type)
      border-top 1px solid #e9ebf0
    
    .minyan
      &-description
        width 375px

        .secondary
          font-size 13px

      &-time
        width 175px

      &-action
        display flex
        align-items center
    h3
      font-size 24px
      margin 0
</style>
