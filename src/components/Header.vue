<template>
  <div class="header">
    <div class="container">
      <div class="links">
        <div class="links--left">
          <router-link to="/upcoming-minyanim" class="uppercase copy--text">Minyanim</router-link>
          <router-link to="/shiva-houses" class="uppercase copy--text">Houses</router-link>
        </div>
        <div class="links--right">
          <router-link to="/donate" class="uppercase copy--accent">Donate</router-link>
          <router-link to="/account" class="copy--text carrot--down---after">Ari Miller</router-link>
        </div>
      </div>
      <div class="title--container">
        <div class="logo--container">
          <img src="../assets/logo.svg" class="logo">
        </div>
        <h1 class="title">Next Minyanim</h1>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'hello'
}
</script>

<style scoped lang="stylus">
  @import '../styles/colors.styl'

  .header
    background primary
    color white
    left 0
    position absolute
    right 0
    top 0
    
  .logo--container
    display flex
    align-items center
    margin-left -75px
    padding-right 25px

    .logo
      border-right 1px solid rgba(55,62,77,.56)
      height 28px
      padding 5px 25px 5px 0

  .links
    display flex
    height 58px
    align-items center
    justify-content space-between
    font-size 10px
    font-weight 600
    letter-spacing .85px
    
    &--left a
        margin-right 45px
    
    &--right a
        margin-left 45px
    
    a
      text-decoration none

    .router-link-active
      color white
  
  .title--container
    display flex
    padding-bottom 20px
    
</style>
