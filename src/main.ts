import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import axios from './api/index'
import "./permission"
import "./api-config"

// import Vant from 'vant'
import '@/assets/css/common.scss'
import 'vant/lib/index.css'

// Vue.use(Vant)
Vue.prototype.$http = axios
Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
