<template>
    <header class="header">
        <div class="container">
            <nav class="links">
                <div class="links--left">
                    <router-link to="/next-minyanim" class="uppercase text--color-secondary">Minyanim</router-link>
                    <router-link to="/shiva-houses" class="uppercase text--color-secondary">Houses</router-link>
                </div>
                <div class="links--right">
                    <router-link to="/donate" class="uppercase text--color-accent donate">Donate</router-link>
                    <a href="javascript:void(0)" class="text--color-secondary carrot--after-down">Ari Miller</a>
                </div>
            </nav>
            <div class="title--container">
                <div class="logo--container">
                    <img src="/static/logo.svg" class="logo">
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
