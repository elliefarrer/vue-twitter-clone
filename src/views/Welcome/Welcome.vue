<template>
    <section id="welcome" class="text-center">
        <h1 class="display-1">Welcome to Barker</h1>
        <router-link to="/posts" class="btn btn-outline-dark">Jump In</router-link>
    </section>
</template>

<script>
export default {
    name: "Welcome"
}
</script>

<style scoped>
    h1 {
        color: #37d988;
    }
</style>
