<template>
  <div id="app">
    <div id="nav">
      <button v-if="this.$session.exists()" @click="goToHome">Home</button>
      <button v-if="this.$session.exists()" @click="goToAbout">About</button>
      <!-- <router-link v-on:click="goToHome" to="/home">Home</router-link> 
      <router-link @click="goToAbout" to="/about">About</router-link> -->
    </div>
    <router-view/>
  </div>
</template>

<script>
export default {
  methods: {
    goToHome() {
      if (this.$session.exists()) { 
        this.$session.set('page', '/home');
        this.$router.push('/home');
      }
    },
    goToAbout() {
      if (this.$session.exists()) {
        this.$session.set('page', '/about');
        this.$router.push('/about');
      }
      
    }
  }
}
</script>



<style>

</style>
