<template lang='pug'>
  .v_chart
    p v-chart组件
    el-row
      el-col(:span='12')
        .chart_main
          ve-ring(:data='chartData',:extend="chartExtend", :settings="chartSettings")
          .total_text.d2-text-center 总创值
          .total_num.d2-text-center 500
      el-col(:span='12')
        div(v-html='msg1')
    el-row
      ve-pie(:data='pieData',:settings="pieSettings")
  </div>
</template>

<script>
export default {
  computed: {
    msg1 () {
      return this.msg.replace(/↵/g, '</br>')
    }
  },
  data () {
    return {
      msg: '第一点：1231313↵ 第二点：123131↵ 第三点、23131313↵',
      pieSettings: {
        level: [['1/1', '1/2', '1/3'], ['1/4', '1/5']],
        radius: 60
      },
      pieData: {
        columns: ['日期', '访问用户'],
        rows: [
          { 日期: '1/1', 访问用户: 1393 },
          { 日期: '1/2', 访问用户: 3530 },
          { 日期: '1/3', 访问用户: 2923 },
          { 日期: '1/4', 访问用户: 1723 },
          { 日期: '1/5', 访问用户: 3792 },
          { 日期: '1/6', 访问用户: 4593 }
        ]
      },
      chartExtend: {
        legend: {
          show: true,
          bottom: true
        },
        series: {
          center: ['50%', '50%']
        }
      },
      chartData: {
        columns: ['日期', '访问用户'],
        rows: [{ 日期: '111', 访问用户: 1500 }, { 日期: '222', 访问用户: 2500 }]
      },
      chartSettings: {
        radius: ['80px', '128px'],
        label: {
          // normal: {
          //   textStyle: {
          //     fontSize: 16
          //   }
          // },
          color: '#fff',
          fontSize: '12',
          formatter: params => {
            if (params.dataIndex === 0) {
              return `${params.percent}%`
            } else {
              return `${params.percent}%`
            }
          },
          position: 'inner'
          // rich: {
          //   a: {
          //     color: '#fff'
          //   },
          //   b: {
          //     color: '#fff'
          //   }
          // }
        },
        itemStyle: {
          color: seriesIndex => {
            if (seriesIndex.dataIndex === 0) {
              return {
                type: 'linear',
                x: 0,
                y: 1,
                x2: 0,
                y2: 0,
                colorStops: [
                  {
                    offset: 0,
                    color: '#40abfb' // 0% 处的颜色
                  },
                  {
                    offset: 1,
                    color: '#75b9f9' // 100% 处的颜色
                  },
                  {
                    offset: 1,
                    color: '#77c5f7' // 100% 处的颜色
                  },
                  {
                    offset: 1,
                    color: '#78d0f5' // 100% 处的颜色
                  }
                ],
                global: false // 缺省为 false
              }
            } else {
              return '#3b90d0'
            }
          }
        }
      }
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.chart_main {
  width: 100%;
  position: relative;
  // height: 400px;
  // background: #bfc;
  .total_text,
  .total_num {
    position: absolute;
    width: 100%;
  }
  .total_text {
    top: 44%;
    color: #cbcbcb;
    font-size: 12px;
  }
  .total_num {
    top: 50%;
    font-size: 22px;
    color: #080808;
    font-weight: 600;
  }
}
</style>
