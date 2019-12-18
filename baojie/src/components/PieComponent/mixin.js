import echarts from 'echarts'
import _ from 'lodash'
export default {
  computed: {
    // 图表容器1
    chartMixin_Dom () {
      let dom = document.getElementById(this.domId)
      return dom && echarts.init(dom)
    },
    // 图表容器2
    chartMixin_Dom2 () {
      let dom = document.getElementById(this.domId2)
      return dom && echarts.init(dom)
    },
    // 图表resize
    chartMixin_Resize () {
      return _.throttle(() => this.chartMixin_Dom.resize(), 400)
    }
  },
  mounted () {
    window.addEventListener('resize', this.chartMixin_Resize)
  },
  destroyed () {
    window.removeEventListener('resize', this.chartMixin_Resize)
  }
}
