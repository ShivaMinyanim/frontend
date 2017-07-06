<template>
    <section class="list">
        <article v-for="minyan in minyanim">
            <div class="time">
                <h3>{{ minyan.timestamp | time }}</h3>
            </div>
            <div class="description capitalize">
                <h3>{{ minyan.type }}</h3>
                <span class="secondary text--color-secondary">{{ minyan.house.street }} {{ minyan.house.city }}, {{minyan.house.state }}</span>
            </div>
            <div v-if="!user.isAttending(minyan)" class="action" @click="user.attend(minyan)">
                <a class="button button--primary uppercase">Attend</a>
            </div>
            <div v-else class="action" @click="user.cancelAttendanceAt(minyan)">
                <a class="button button--cancel uppercase">Cancel Attendance</a>
            </div>
        </article>
    </section>
</template>

<script>
export default {
    props: {
        minyanim: Array
    }
}
</script>

<style scoped lang="stylus">
.list
    margin 60px 0 0 0
    padding 0
    width 700px

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
