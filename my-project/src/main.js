import Vue from 'vue'
import App from './App.vue'
import router from './router'

Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
import { createApp } from 'vue'
import store from '@/store' // short for @/store/index
const app = createApp({ /* your root component */ })
app.use(store)