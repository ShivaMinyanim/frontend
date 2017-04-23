<template>
    <header class="header">
        <div class="container">
            <nav class="links">
                <div class="links--left">
                    <router-link to="/next-minyanim" class="uppercase text--color-secondary">Minyanim</router-link>
                    <router-link to="/shiva-houses" class="uppercase text--color-secondary">Houses</router-link>
                </div>
                <div class="links--right">
                    <router-link to="/donate" class="uppercase text--color-accent">Donate</router-link>
                    <router-link to="/account" class="text--color-secondary carrot--after-down">Ari Miller</router-link>
                </div>
            </nav>
            <div class="title--container">
                <div class="logo--container">
                    <img src="../assets/logo.svg" class="logo">
                </div>
                <h1 class="title">Next Minyanim</h1>
            </div>
        </div>
    </header>
</template>

<script>
export default {
    // name: 'hello'
}
</script>
