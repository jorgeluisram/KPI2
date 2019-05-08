<template>
  <div class="about">
    <h1>This is an about page</h1>
    <button @click="logout">Logout</button>
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

