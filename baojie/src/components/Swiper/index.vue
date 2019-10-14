<template lang='pug'>
  .swipe
    h2 swiper组件
    .swiper-container
      swiper(:options="swiperOption", ref="mySwiper",@someSwiperEvent="callback")
        swiperSlide.slider(v-for='(item,index) in arr',@click.native='clickItem(item)',:class='index === curentIndex?"active":""') {{item}}
      .swiper-button-prev.swiper-button-black(slot="button-prev")
      .swiper-button-next.swiper-button-black(slot="button-next")
</template>

<script>
import { swiper, swiperSlide } from 'vue-awesome-swiper'
export default {
  name: 'swier',
  data() {
    return {
      arr: [
        '2019-12月',
        '2019-11月',
        '2019-10月',
        '2019-9月',
        '2019-8月',
        '2019-7月',
        '2019-6月',
        '2019-5月',
        '2019-4月',
        '2019-3月',
        '2019-2月',
        '2019-1月'
      ],
      swiperOption: {
        slidesPerView: 8,
        spaceBetween: 30,
        navigation: {
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev',
          disabledClass: 'my-button-disabled'
        },
        allowTouchMove: false, // 不允许滑动切换
        on: {
          tap(tab) {
            // console.log(tab)
          }
        }
      },
      curentIndex: 0 // 当前的index
    }
  },
  mounted() {
    this.curentIndex = this.$refs.mySwiper.swiper.activeIndex
  },
  computed: {},
  methods: {
    findIndex(name) {
      let index = 0
      for (let i = 0; i < this.arr.length; i++) {
        if (this.arr[i] === name) {
          index = i
          break
        }
      }
      return index
    },
    clickItem(item) {
      this.curentIndex = this.findIndex(item)
    },
    callback(e) {
      console.log(e)
    }
  },
  components: {
    swiper,
    swiperSlide
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss">
.swipe {
  .swiper-container {
    height: 80px;
    line-height: 80px;
    background: #ccc;
    padding-left: 25px;
    padding-right: 25px;
    .my-button-disabled {
      cursor: not-allowed;
      opacity: .2;
    }
    .swiper-wrapper {
      display: flex;
      justify-content: space-between;
    }
    .slider {
      cursor: pointer;
    }
    .active {
      color: #3480FF;
    }
    .swiper-button-prev,
    .swiper-button-next {
      height: 20px;
      margin-top: -8px;
      outline: none;
    }
  }
}
</style>
