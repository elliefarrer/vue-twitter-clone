<template>
  <div id="app">
    <Header />
    <main>
      <Welcome message="Welcome to Barker" />
    </main>
    <Footer />
  </div>
</template>

<script>

import Header from './components/Header/Header.vue'
import Welcome from './components/Welcome/Welcome.vue'
import Footer from './components/Footer/Footer.vue'

export default {
  name: 'app',
  components: {
    Header, Welcome, Footer
  }
}
</script>

<style>
  #app {
    min-height: 100vh;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
  }
</style>
