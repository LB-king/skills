<template lang='pug'>
  el-row
    el-col(:span='12')
      .pie
        #main_pie(ref='main')
    el-col(:span='12')
</template>

<script>
import chartMixin from './mixin'
import _, { throttle } from 'lodash'
let colorList = [ '#1b57ce', '#7ad050', '#8c40e2', '#f56c6c', '#80748e', '#3f547d', '#5484e6', '#8abf70' ]
const getRandomColor = (arr) => {
  return colorList[_.random(0, arr.length - 1)]
}
let echarts = require('echarts')
export default {
  name: 'PieComponent',
  mixins: [ chartMixin ],
  data() {
    return {
      domId: 'main_pie'
    }
  },
  methods: {
    initChart () {
      let option = {
        tooltip: {},
        legend: {
          show: false
        },
        series: [
          {
            name: '访问来源',
            type: 'pie',
            selectedMode: 'single',
            radius: [0, '40%'],
            label: {
              normal: {
                position: 'inner'
              }
            },
            labelLine: {
              normal: {
                show: false
              }
            },
            data: [
              { value: 400, name: 'OCR' },
              { value: 600, name: 'RPA' }
            ],
            itemStyle: {
              normal: {
                color: function (params) {
                  return ['#45a3fc', '#47cbca'][params.dataIndex]
                }
              }
            }
          },
          {
            name: '访问来源',
            type: 'pie',
            radius: ['40%', '55%'],
            labelLine: {
              normal: {
                show: false
              }
            },
            label: {
              normal: {
                // formatter: '{a|{a}}{abg|}\n{hr|}\n  {b|{b}：}{c}  {per|{d}%}  ',
                formatter: '{b|{b}}',
                // backgroundColor: '#eee',
                // borderColor: '#aaa',
                // borderWidth: 1,
                // borderRadius: 4,
                rich: {
                  // a: {
                  //   color: '#999',
                  //   lineHeight: 22,
                  //   align: 'center'
                  // },
                  // hr: {
                  //   borderColor: '#aaa',
                  //   width: '100%',
                  //   borderWidth: 0.5,
                  //   height: 0
                  // },
                  b: {
                    color: '#666',
                    fontSize: 16,
                    lineHeight: 33
                  }
                  // ,
                  // per: {
                  //   color: '#eee',
                  //   backgroundColor: '#334455',
                  //   padding: [2, 4],
                  //   borderRadius: 2
                  // }
                }
              }
            },
            data: [
              { value: 100, name: '身份证识别', color: 'red' },
              { value: 300, name: '发票识别', color: 'blue' },
              { value: 600, name: 'RPA', color: '#47cbca' }
            ],
            itemStyle: {
              normal: {
                color: function (params) {
                  return getRandomColor(colorList)
                  // return params.data.color
                  // console.log(params)
                  // return ['#45a3fc', '#47cbca', '#95d2fc', '#c5eafe'][params.dataIndex]
                }
              }
            }
          }
        ]
      }
      this.chartMixin_Dom.setOption(option)
    }
  },
  mounted() {
    this.initChart()
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.pie {
  #main_pie {
    height: 600px;
    width: auto;
  }
}
</style>
