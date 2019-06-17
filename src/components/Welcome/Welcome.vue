<template>
    <section id="welcome" class="text-center">
        <h1 class="display-1">{{message}}</h1>
        <b-button variant="outline-dark">Jump In</b-button>
    </section>
</template>

<script>
export default {
    name: 'Welcome',
    props: {
        message: String
    }
}
</script>

<style>
    h1 {
        color: #37d988;
    }
</style>
