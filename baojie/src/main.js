import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import ElementUI from 'element-ui'
import VeRing from 'v-charts/lib/ring.common'
import { ValidationProvider, extend } from 'vee-validate'
import 'element-ui/lib/theme-chalk/index.css'
extend('secret', {
  validate: value => value === 'example',
  message: 'msg'
})
Vue.component('ValidationProvider', ValidationProvider)
Vue.use(ElementUI)
Vue.component(VeRing.name, VeRing) // VeRing.name的值就是 VeRing
Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
