import Vue from 'vue'
import App from './App.vue'
import './registerServiceWorker'
import FirebaseVue from './firebase'
import router from './router'
import store from './store'
import vuetify from './plugins/vuetify';
import Vuelidate from 'vuelidate'
import './assets/scss/app.scss'
import './utils/directives'
import 'roboto-fontface/css/roboto/roboto-fontface.css'
import 'material-design-icons-iconfont/dist/material-design-icons.css'

Vue.use(FirebaseVue)
Vue.use(Vuelidate)
Vue.config.productionTip = false

new Vue({
  router,
  store,
  vuetify,
  render: h => h(App)
}).$mount('#app')
