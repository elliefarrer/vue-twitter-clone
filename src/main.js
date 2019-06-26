import Vue from 'vue'

// Styling
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import BootstrapVue from 'bootstrap-vue'
Vue.use(BootstrapVue)

import App from './App.vue'


Vue.config.productionTip = false

// Routing
import router from './router'

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')

