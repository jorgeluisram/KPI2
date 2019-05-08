<template>
    <div class="login">
          <section>
            <section>
       
        <b-field label="Usuario"
            type="is-success"
            message="This username is available">
            <b-input v-model="username" maxlength="30"></b-input>
        </b-field>

        <b-field label="Contraseña">
            <b-input type="password"
                v-model="password"
                password-reveal>
            </b-input>
        </b-field>

    </section>
        <div class="buttons">
            <b-button @click="login" type="is-primary">Login</b-button>

        </div>





    </section>
       <!--  <input type="text" v-model="username">
        <input type="text" v-model="password">
        <button @click="login">Login</button> -->
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


