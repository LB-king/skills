<template lang='pug'>
  .down-up 下拉刷新---上拉加载更多
    .box
      ly-tab(
        :items='items',
        v-model='selectedId',
        :options='options',
        @change='handleChange')
      .container(ref='container')
        .content
          ul
            li(v-for='(item, index) in 20', :key='item') 我们都爱学习-------{{selectedlabel}}{{index + 1}}
    .pos(style='margin-top:20px;')
    el-button(@click='debounceClick') 函数防抖
    el-button(@click='throttleClick') 函数节流
    el-button(@click='diyClick', :disabled='disabled') 防止连续点击
</template>

<script>
import BScroll from 'better-scroll'
import { throttle, debounce } from 'lodash'
let debounceFun = (func, waitTime) => {
  let timer = null
  let debounced = (args) => {
    let self = this
    let invokeFunc = () => {
      func.apply(self, args)
    }
    let clearTimer = () => {
      clearTimeout(timer)
      timer = null
    }
    timer === null && invokeFunc()
    timer !== null && clearTimer()
    timer = setTimeout(() => {
      clearTimer()
    }, waitTime)
  }
  return debounced
}
export default {
  data() {
    return {
      disabled: false,
      selectedId: 0,
      items: [{ label: '语文' }, { label: '数学' }, { label: '外语' }],
      options: {
        activeColor: '#e624b2'
      },
      list: []
    }
  },
  methods: {
    // 调用防抖函数
    debounceClick: debounce(() => {
      console.log('函数防抖')
    }, 600),
    // 调用节流函数
    throttleClick: throttle(() => {
      console.log('函数节流')
    }, 3000),
    // throttleClick () {
    //   console.log('函数节流')
    // },
    diyClick: debounceFun(() => {
      console.log('点击了一次')
    }, 2000),
    handleChange(tab) {
      console.log(tab.label)
    },
    loadMore() {},
    initScroll() {
      this.$nextTick(() => {
        if (!this.scroll) {
          this.scroll = new BScroll(this.scrollContainer, {
            scrollY: true,
            pullUpLoad: true
          })
          this.scroll.on('pullUpLoad', () => {
            console.log('上拉刷新')
          })
        }
      })
    }
  },
  computed: {
    selectedlabel() {
      return this.items[this.selectedId].label
    },
    scrollContainer() {
      let container = this.$refs.container
      return container
    }
  },
  mounted() {
    this.initScroll()
  }
}
</script>

<style lang='scss'>
.down-up {
  .box {
    width: 400px;
    height: 548px;
    margin: 0 auto;
    border: 1px dashed #ccc;
    .container {
      height: calc(100% - 48px);
      width: 100%;
      overflow: hidden;
    }
    .ly-tabbar {
      box-shadow: none;
    }
    .ly-tab-item-label {
      cursor: pointer;
    }
    ul {
      list-style: none;
      padding-left: 0;
      margin-top: 0;
      li {
        height: 50px;
        line-height: 50px;
        border-bottom: 1px solid #bfc;
      }
    }
  }
}
</style>
