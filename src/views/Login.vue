<template>
    <div class="login">
        <input type="text" v-model="username">
        <input type="text" v-model="password">
        <button @click="login">Login</button>
    </div>
</template>

<script>
export default {
    name: '',
    data: {
        username: '',
        password: '',

    },
    methods: {
        login() {
            if (this.$session.exists()) {
                var page = this.$session.get('page'); // '/home';
                this.$router.push(page);
            } else {
                if (this.username == 'admin' && this.password == 'admin') {
                    this.$session.start()
                    this.$router.push('/home');
                }
            }
        }
    }
}
</script>

<style>

</style>


