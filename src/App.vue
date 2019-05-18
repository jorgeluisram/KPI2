<template>
  <div id="app">
      <section>
        <b-dropdown v-if="this.$session.exists()" aria-role="list">
            <button class="button is-primary" slot="trigger">
                <span>Menu</span>
                <b-icon icon="menu-down"></b-icon>
            </button>


       
            <b-dropdown-item aria-role="listitem" v-if="this.$session.exists()" @click="goToHome">Home</b-dropdown-item>
            <b-dropdown-item aria-role="listitem" v-if="this.$session.exists()" @click="goToAbout">About</b-dropdown-item>
            <b-dropdown-item aria-role="listitem" @click="Ventas">Ventas</b-dropdown-item>
        </b-dropdown>

      
    </section>
    <div id="nav">
   <body background="../Images/Imagen.jpg" WIDTH="100" HEIGHT="100"> 
                </body>
      <!-- <router-link v-on:click="goToHome" to="/home">Home</router-link> 
      <router-link @click="goToAbout" to="/about">About</router-link> -->
    </div>
    <router-view/>
    <div id="app2" background="../Images/Imagen.jpg" WIDTH="100" HEIGHT="100"> 
    </div>
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
    Ventas() {
      if (this.$session.exists()) { 
        this.$session.set('page', '/ventas');
        this.$router.push('/ventas');
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
