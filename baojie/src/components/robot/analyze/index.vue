<template lang='pug'>
  .analyze_module
    el-row
      span 运营分析-
      el-select.no-border(placeholder="场景名称",v-model='sceneName')
        el-option(v-for='i in 5',:key='i',:label='getOpName(i)',:value='i')
    el-divider
    el-row(style='padding-top:30px;')
      el-col.tac(:span='3')
        .cost1 一次性成本
        .cost2 运营成本
        .cost3 机器人创值
      el-col(:span='8')
        .process-box
          el-row.mb20
            .title.mb6(:style='getLeftStyle(pct)') 5万
            el-progress(:percentage="pct",color="#3480FF",:show-text='false')
          el-row.mb20
            .title.mb6(:style='getLeftStyle(pct1)') 20万
            el-progress(:percentage="pct1",color="#FF4081",:show-text='false')
          el-row
            .title.mb6(:style='getLeftStyle(pct2)') 15万
            el-progress(:percentage="pct2",color="#8BC34A",:show-text='false')
      el-col(:span='8',:push='1')
        .month-increase 月增长8万
        .year-increase 年增长12万
    el-card(style='margin-top:25px;')
      el-row
        span 详细统计-{{getOpName(sceneName)}}
        el-col(:span='1',:push='23')
          el-popover(placement='bottom',width='220',trigger='manual',popper-class='popover-box',v-model='showMore')
            i.pointer(:class='caretClass',@click='showMore=true',slot='reference')
            el-row.pd5.group-title
              el-col(:span='10')
                span 时间粒度
              el-col(:span='2',:offset='12')
                i.el-icon-close.pointer.group-title(@click='showMore=false')
            el-row.pd5
              el-radio-group(v-model='timeDimension')
                el-radio(label='day') 日
                el-radio(label='month') 月
                el-radio(label='year') 年
            el-row.pd5.group-title 统计维度
            el-row.times.pd5.pointer(@click.native='statsClick("times")')
              el-col(:span='10',:class='statsDimension==="times"?"active":""') 运行次数
              el-col(:span='2',:offset='12',v-show='statsDimension==="times"')
                i.el-icon-check.active
            el-row.created-value.pd5.pointer(@click.native='statsClick("values")')
              el-col(:span='10',:class='statsDimension==="values"?"active":""') 创值
              el-col(:span='2',:offset='12',v-show='statsDimension==="values"')
                i.el-icon-check.active
            el-row.pd5.group-title 时间维度
            el-row
              el-date-picker(v-model='timeRange',
                type='daterange',
                range-separator='至',
                start-placeholder='开始日期',
                end-placeholder='结束日期',
                @change='changeTime()')
      el-row
        #chart-container.chart-box
</template>

<script>
import dayjs from 'dayjs'
import opt from './opt'
import chartMixin from './mixin'
let xData = [
  '2019-10-24',
  '2019-10-23',
  '2019-10-22',
  '2019-10-21',
  '2019-10-20',
  '2019-10-19',
  '2019-10-18'
]
let yData = [10, 20, 10, 50, 36, 25, 55]
export default {
  data() {
    return {
      sceneName: '',
      pct: 50,
      pct1: 60,
      pct2: 45,
      showMore: false,
      timeDimension: 'day', // 时间维度
      statsDimension: 'times', // 统计维度
      timeRange: [new Date(dayjs().$y, dayjs().$M - 1, dayjs().$D), new Date()], // 时间范围
      startTime: '', // 统计开始时间
      endTime: '', // 统计结束时间
      domId: 'chart-container'
    }
  },
  mixins: [opt, chartMixin],
  methods: {
    statsClick(val) {
      this.statsDimension = val
      this.initChart(xData, yData)
    },
    initChart() {
      let option = this.chartOption(xData, yData)
      this.chartMixin_Dom.setOption(option)
    },
    changeTime() {
      if (this.timeRange) {
        let start = this.timeRange[0]
        console.log(dayjs(start))
        // console.log(dayjs(start).$y)
      }
    },
    getOpName(i) {
      return `场景${i}`
    },
    getLeftStyle(num) {
      let left = parseInt(num / 2)
      return `margin-left:${left}%;`
    }
  },
  computed: {
    caretClass() {
      return this.showMore ? 'el-icon-caret-bottom' : 'el-icon-caret-top'
      // return 'el-icon-caret-bottom'
    }
  },
  mounted() {
    this.initChart()
  }
}
</script>
<style lang='scss'>
.popover-box {
  min-width: 220px;
  right: 50px;
  left: auto !important;
  .popper__arrow {
    left: 30px !important;
  }
  .pointer {
    cursor: pointer;
  }
  .active {
    color: #1989fa;
  }
  .el-icon-check {
    font-weight: 600;
  }
  .group-title {
    color: #5a5e66;
    font-weight: 600;
  }
  .pd5 {
    padding: 5px 0;
  }
  .el-range-editor.el-input__inner {
    padding: 3px 5px;
  }
  .el-date-editor--daterange.el-input,
  .el-date-editor--daterange.el-input__inner,
  .el-date-editor--timerange.el-input,
  .el-date-editor--timerange.el-input__inner {
    width: 220px;
  }
}
</style>
<style lang='scss'>
.analyze_module {
  .chart-box {
    height: 360px;
    width: auto;
    border: 1px solid #cccccc;
  }
  .process-box {
    height: 160px;
    width: 100%;
    border: 1px dashed #ccc;
    border-top: none;
    border-bottom: none;
    padding: 2px;
  }
  .cost1 {
    margin-top: 20px;
  }
  .cost2,
  .cost3 {
    margin-top: 33px;
  }
  .month-increase {
    margin-top: 60px;
  }
  .year-increase {
    margin-top: 15px;
  }
  .mb6 {
    margin-bottom: 6px;
  }
  .mb20 {
    margin-bottom: 20px;
  }
  .tac {
    text-align: center;
  }
  .pointer {
    cursor: pointer;
  }
}
</style>
