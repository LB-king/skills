<template lang='pug'>
  .robot robot
    el-row
      el-col(:span='3',:offset='21')
        span.tab_title(:class='{"active":curlabel==="sum"}',@click='tabChange("sum")') 汇总
        span |
        span.tab_title(:class='{"active":curlabel==="analyze"}',@click='tabChange("analyze")') 分析
    component(:is='curCom')
      a(href='',@click.prevent='custormAnchor') click to md
      div(v-for='i in 40', :key='i',style='height:30px;',:id='mkId(i)') 锚点位置---{{i}}
</template>
<script>
import sumCom from './sum'
import analyzeCom from './analyze'
// 迭代函数
function * idMaker () {
  let index = 0
  while (true) { yield index++ }
}
let gen = idMaker()
console.log(gen.next().value) // 0
console.log(gen.next().value) // 1
export default {
  data() {
    return {
      curlabel: 'sum'
    }
  },
  methods: {
    tabChange (val) {
      this.curlabel = val
    },
    mkId (id) {
      return `md${id}`
    },
    custormAnchor () {
      let anchorEl = document.getElementById('md30')
      if (anchorEl) {
        let total = anchorEl.offsetTop
        console.log(total)
        window.scrollTo({
          top: total,
          behavior: 'smooth'
        })
      }
    }
  },
  components: {
    sumCom,
    analyzeCom
  },
  computed: {
    curCom () {
      if (this.curlabel === 'sum') {
        return 'sumCom'
      } else if (this.curlabel === 'analyze') {
        return 'analyzeCom'
      }
      return ''
    }
  },
  mounted() {}
}
</script>

<style lang='scss'>
.robot {
  .active {
    color: #3480FF;
  }
  .tab_title {
    cursor: pointer;
  }
}
</style>
