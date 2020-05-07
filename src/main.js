import Vue from 'vue'
import App from './App.vue'
import './registerServiceWorker'
import vuetify from './plugins/vuetify'
import 'material-design-icons-iconfont/dist/material-design-icons.css'
import router from './router'
import Vuelidate from 'vuelidate'
import store from './store'
/*;

import './assets/scss/app.scss'
import './utils/directives'
import 'roboto-fontface/css/roboto/roboto-fontface.css'
*/

Vue.use(Vuelidate)
Vue.config.productionTip = false

new Vue({
  store,
  router,
  vuetify,
  render: h => h(App)
}).$mount('#app')
