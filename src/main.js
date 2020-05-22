import "bootstrap/dist/css/bootstrap.css"

import Vue from 'vue'
import App from './App.vue'
import router from './services/router.js'
import ApiRest from './services/ApiRest.js'

Vue.config.productionTip = false

new Vue({
  router,
  ApiRest,
  render: h => h(App),
}).$mount('#app')
