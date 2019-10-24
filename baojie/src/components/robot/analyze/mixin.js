import echarts from 'echarts'
import _ from 'lodash'
export default {
  computed: {
    // 图表容器
    chartMixin_Dom () {
      let dom = document.getElementById(this.domId)
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
