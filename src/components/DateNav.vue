<template>
    <div>
        <div class="icon-container">
            <i v-if="dayOffset > MIN_OFFSET" class="fa fa-chevron-left" @click="previous()"></i>
        </div>
        <span>{{ secularDate }} &mdash; {{ hebrewDate }}</span>
        <div class="icon-container">
            <i v-if="dayOffset < MAX_OFFSET" class="fa fa-chevron-right" @click="next()"></i>
        </div>
    </div>
</template>

<script>
import moment from 'moment'
import zman from '@/util/zman'

export default {
    props: ['value'],

    data () {
        return {
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
            this.emit()
        },

        previous () {
            this.dayOffset--
            this.emit()
        },

        emit () {
            this.$emit('input', this.date)
        }
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
</style>
