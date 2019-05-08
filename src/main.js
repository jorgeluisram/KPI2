import Vue from 'vue'
import App from './App.vue'
import router from './router'
import VueSession from 'vue-session'


import Buefy from 'buefy'
import 'buefy/dist/buefy.css'

Vue.use(Buefy)

Vue.config.productionTip = false
Vue.use(VueSession)

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
