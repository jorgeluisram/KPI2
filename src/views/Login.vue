

<template>
    <div class="login">

         <div class="navbar-menu">
            <div class="navbar-end">
                <b-dropdown position="is-bottom-left" aria-role="menu">
                    <a  
                        class="navbar-item"
                        slot="trigger"
                        role="button">
                        <span>Ingresar</span>
                        <b-icon icon="menu-down"></b-icon>
                    </a>

                         <b-dropdown-item aria-role="menu-item" custom paddingless>
                                <form action="">
                                    <div class="modal-card" style="width:400px;">
                                        <section class="modal-card-body">
                                    <b-field label="Usuario"
                                        type="is-success"
                                        message="Ingrese Usuario">
                                        <b-input v-model="username" maxlength="30"></b-input>
                         </b-field>

                        <b-field label="Contraseña">
                            <b-input type="password"
                                v-model="password"
                                password-reveal>
                            </b-input>
                        </b-field>

                                   
                                </section>
                                <footer class="modal-card-foot">
                                    <button  @click="login" class="button is-primary">Ingresar</button>
                                </footer>
                            </div>
                        </form>
                    </b-dropdown-item>
                </b-dropdown>
            </div>
      </div>
    </nav>
      
            

                
     

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


