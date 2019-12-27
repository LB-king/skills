<template lang='pug'>
  .better_scroll.main1 BetterScroll
    .main(ref='main')
      .content(ref='content',:style='contentWidth')
        div(v-for='i in list',:key='i') {{i}}
</template>

<script>
import BScroll from 'better-scroll'
import { throttle } from 'lodash'
export default {
  computed: {
    contentWidth() {
      let width = this.list.length * 40
      return `width:${width}px`
    }
  },
  data() {
    return {
      list: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
    }
  },
  methods: {
    freshData () {
      return throttle(() => {
        console.log('上拉刷新')
      }, 400)
    }
  },
  mounted() {
    this.$nextTick(() => {
      this.scroll = new BScroll('.main', {
        scrollX: false,
        scrollY: true,
        bounce: {
          top: true,
          bottom: true,
          left: true,
          right: true
        },
        bounceTime: 700,
        pullDownRefresh: {
          threshold: 50,
          probeType: 2
        },
        pullUpLoad: {
          threshold: -20,
          probeType: 3
        }
      })
      this.scroll.on('scroll', (pos) => {
        if (pos.y < -930) {
          this.freshData()
        }
      })
      // this.scroll.on('pullingDown', () => {
      //   console.log('下拉刷新')
      //   // this.$nextTick(() => {
      //   this.scroll.refresh()
      //   // })
      //   this.scroll.finishPullDown()
      // })
      // this.scroll.on('pullingUp', () => {
      //   console.log('上拉加载')
      //   // this.$nextTick(() => {
      //   this.scroll.refresh()
      //   // })
      //   this.scroll.finishPullUp()
      // })
    })
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
@import url('~@/assets/style/style.css');
.main {
  height: 100px;
  width: 250px;
  background: #ccc;
  overflow: hidden;
  .content {
    div {
      width: 40px;
      height: 100px;
      line-height: 100px;
      background-color: #bfc;
    }
  }
}
</style>
