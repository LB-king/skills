import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
// 引入样式element-ui
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
// 引入v-charts环形图和饼图
import VeRing from 'v-charts/lib/ring.common'
import VePie from 'v-charts/lib/pie.common'
import { ValidationProvider, extend } from 'vee-validate'
// 引入swiper组件
import VueAwesomeSwiper from 'vue-awesome-swiper'
import 'swiper/dist/css/swiper.css'
// 引入ly-lab
import LyTab from 'ly-tab'
import 'font-awesome/css/font-awesome.css'
extend('secret', {
  validate: value => value === 'example',
  message: 'msg'
})
Vue.component('ValidationProvider', ValidationProvider)
Vue.use(ElementUI)
Vue.use(LyTab)
Vue.use(VueAwesomeSwiper)
Vue.component(VeRing.name, VeRing) // VeRing.name的值就是 VeRing
Vue.component(VePie.name, VePie) // VePie.name的值就是 VePie
Vue.config.productionTip = false

Vue.directive('btn-click', {
  inserted (el, bind) {
    el.addEventListener('click', () => {
      if (!el.disabled) {
        el.disabled = true
        setTimeout(() => {
          el.disabled = false
        }, bind.value || 2000)
      }
    })
  }
})
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
