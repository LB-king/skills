<template lang='pug'>
  .robot robot
    el-row
      el-col(:span='3',:offset='21')
        span.tab_title(:class='{"active":curlabel==="sum"}',@click='tabChange("sum")') 汇总
        span |
        span.tab_title(:class='{"active":curlabel==="analyze"}',@click='tabChange("analyze")') 分析
    component(:is='curCom')
</template>
<script>
import sumCom from './sum'
import analyzeCom from './analyze'
export default {
  data() {
    return {
      curlabel: 'sum'
    }
  },
  methods: {
    tabChange (val) {
      this.curlabel = val
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
