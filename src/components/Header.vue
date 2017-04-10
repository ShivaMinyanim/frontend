<template>
  <div class="header">
    <div class="container">
      <div class="links">
        <div class="links--left">
          <router-link to="/upcoming-minyanim" class="uppercase">Minyanim</router-link>
          <router-link to="/shiva-houses" class="uppercase">Houses</router-link>
        </div>
        <div class="links--right">
          <router-link to="/donate" class="uppercase">Donate</router-link>
          <router-link to="/account">Ari Miller ></router-link>
        </div>
      </div>
      <div class="title--container">
        <!-- <img src="logo"> -->
        <div style="height: 20px; width: 20px; background: white;"></div>
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
      color copy-color
      text-decoration none

    .router-link-active
      color white
  
  .title--container
    display flex
    
    .title
      padding-bottom 20px

</style>
