import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import ElementUI from 'element-ui'
import VeRing from 'v-charts/lib/ring.common'
import { ValidationProvider, extend } from 'vee-validate'
import 'element-ui/lib/theme-chalk/index.css'
import VueAwesomeSwiper from 'vue-awesome-swiper'
import 'swiper/dist/css/swiper.css'
extend('secret', {
  validate: value => value === 'example',
  message: 'msg'
})
Vue.component('ValidationProvider', ValidationProvider)
Vue.use(ElementUI)
Vue.use(VueAwesomeSwiper)
Vue.component(VeRing.name, VeRing) // VeRing.name的值就是 VeRing
Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
