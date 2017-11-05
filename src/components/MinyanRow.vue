<template>
    <article>
        <div class="time">
            <h3>{{ minyan.timestamp | time }}</h3>
        </div>
        <div class="description capitalize">
            <h3>{{ minyan.type }}</h3>
            <span class="secondary text--color-secondary"> {{ addressOf(minyan) }}</span>
        </div>
        <div v-if="!isAttending(minyan)" class="action">
            <a @click="attend(minyan)" class="button button--primary uppercase">Attend</a>
        </div>
        <div v-else class="action">
            <a @click="cancelAttendanceAt(minyan)" class="button button--cancel uppercase">Cancel Attendance</a>
        </div>
    </article>
</template>

<script>
    export default {
        props: ['minyan'],

        computed: {
            user () {
                return this.$store.state.user
            },

            attendances () {
                return this.$store.state.attendances
            }
        },

        methods: {
            addressOf (minyan) {
                const house = minyan.house

                return `${house.street} ${house.city}, ${house.state}`
            },

            isAttending (minyan) {
                return this.attendances.includes(minyan.id)
            },

            attend (minyan) {
                this.$store.dispatch('ATTEND_MINYAN', { minyan })
            },

            cancelAttendanceAt (minyan) {
                this.$store.dispatch('CANCEL_ATTENDANCE_AT_MINYAN', { minyan })
            }
        }
    }
</script>

<style scoped lang="stylus">
    article
        display flex
        justify-content space-between
        padding 33px 0

        &:not(:first-of-type)
            border-top 1px solid #e9ebf0

        .description
            width 375px

            .secondary
                font-size 13px

        .time
            width 175px

        .action
            display flex
            align-items center
        h3
            font-size 24px
            margin 0
</style>
