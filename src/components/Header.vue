<template>
  <div class="header">
    <div class="container">
      <div class="links">
        <div class="links--left">
          <router-link to="/next-minyanim" class="uppercase copy--text">Minyanim</router-link>
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
  // name: 'hello'
}
</script>
