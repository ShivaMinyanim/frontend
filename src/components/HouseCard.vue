<template>
    <section class="card">
        <h1>{{ name }}</h1>
    </section>
</template>

<script>
export default {
    props: {
        house: Object
    },

    computed: {
        name () {
            return this.house.residence_name
        }
    }
}
</script>

<style scoped lang="stylus">
    //
</style>
