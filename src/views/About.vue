<template>
  <div class="about">
    <h1>Presione si desea salir del sistema</h1>
    <b-button @click="logout" type="is-danger"
              size="is-medium"
                icon-left="exit-to-app">
                Salir
            </b-button>
    
  </div>
</template>

<script>
export default {
  methods: {
    logout() {
      this.$session.destroy();
      this.$router.push('/');
    }
  }
}
</script>

