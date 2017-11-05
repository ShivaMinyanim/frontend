<template>
    <div class="sub-header">
        <slot></slot>
    </div>
</template>

<script>
    export default {}
</script>

<style scoped lang="stylus">
    @import '../styles/variables'

    .sub-header
        background primary
        color #898F9A
        text-align center
        font-size 13px
        padding-bottom 20px
</style>
