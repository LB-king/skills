import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
const files = require.context('./views', false, /\.vue$/)
let modules = {}
files.keys().forEach(key => {
  modules[key.replace(/(\.\/|.vue)/g, '')] = files(key).default
  console.log(files(key).default)
})
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import(/* webpackChunkName: "about" */ './views/About.vue')
    },
    {
      path: '/vchart',
      name: 'vchart',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import(/* webpackChunkName: "about" */ '@/components/Vchart.vue')
    },
    {
      path: '/validate',
      name: 'validate',
      component: () => import('@/components/Validate.vue')
    },
    {
      path: '/vslot',
      name: 'vSlot',
      component: () => import('@/components/Vslot')
    },
    {
      path: '/swiper',
      name: 'swiper',
      component: () => import('@/components/Swiper')
    },
    {
      path: '/pie',
      name: 'pie',
      component: () => import('@/components/PieComponent')
    },
    {
      path: '/better-scroll',
      name: 'better-scroll',
      component: () => import('@/components/BetterScroll')
    },
    {
      path: '/down-up',
      name: 'Down-Up',
      component: () => import('@/components/pullDownAndUp')
    },
    {
      path: '/robot/index',
      name: 'robot-index',
      component: () => import('@/components/robot'),
      children: [
        {
          path: '/robot/index/sum',
          name: 'robot-index-sum',
          component: () => import('@/components/robot/sum')
        },
        {
          path: '/robot/index/analyze',
          name: 'robot-index-analyze',
          component: () => import('@/components/robot/analyze/index.vue')
        }
      ]
    },
    {
      path: '/dragable',
      name: 'dragable',
      component: () => import('@/components/dragable/index.vue')
    }
  ]
})
