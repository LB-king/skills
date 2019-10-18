import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'

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
      component: () => import('@/components/robot')
    },
    {
      path: '/robot/sum',
      name: 'robot-sum',
      component: () => import('@/components/robot/sum')
    },
    {
      path: '/robot/analyze',
      name: 'robot-analyze',
      component: () => import('@/components/robot/analyze/')
    }
  ]
})
