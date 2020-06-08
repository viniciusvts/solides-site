import "bootstrap/dist/css/bootstrap.css"

import Vue from 'vue'
import App from './App.vue'
import router from './services/router.js'
import ApiRest from './services/ApiRest.js'
import UpMeta from './services/UpdateMeta.js'

Vue.prototype.$http = ApiRest
Vue.config.productionTip = false

new Vue({
  router,
  mixins: [UpMeta],
  data() {
    return {
      meta:{
        title: null,
        tags: null
      }
    }
  },
  render: h => h(App),
}).$mount('#app')
