<template lang="pug">
  el-row
    el-col(:span='12')
      .pie
        #main_pie(ref='main')
    el-col(:span='12',style='position:relative;')
      #slidebar(style='height:200px;background:#bfc;position:relative;')
      .start {{startValue}}
      .end {{endValue}}
</template>

<script>
import chartMixin from './mixin'
import _ from 'lodash'
import { throttle } from 'throttle-debounce'
let colorList = [
  '#1b57ce',
  '#7ad050',
  '#8c40e2',
  '#f56c6c',
  '#80748e',
  '#3f547d',
  '#5484e6',
  '#8abf70'
]
const getRandomColor = arr => {
  return colorList[_.random(0, arr.length - 1)]
}
export default {
  name: 'PieComponent',
  mixins: [chartMixin],
  data() {
    return {
      domId: 'main_pie',
      domId2: 'slidebar',
      startValue: 0,
      endValue: 100
    }
  },
  computed: {
    slideData() {
      let arr = []
      while (arr.length <= 100) {
        arr.push(arr.length)
      }
      return arr
    }
  },
  methods: {
    initChart() {
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
            data: [{ value: 400, name: 'OCR' }, { value: 600, name: 'RPA' }],
            itemStyle: {
              normal: {
                color: function(params) {
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
                color: function(params) {
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
    },
    initSlide() {
      let option = {
        title: {
          left: 'center',
          text: '滑块组件'
        },

        xAxis: {
          type: 'category',
          boundaryGap: false,
          data: this.slideData,
          show: false
        },
        yAxis: {
          type: 'value',
          boundaryGap: false,
          show: false
        },
        dataZoom: [
          {
            type: 'slider',
            filterMode: 'none',
            showDetail: false,
            top: 40,
            height: 16,
            backgroundColor: '#f5ccd4',
            start: 0,
            end: 100,
            fillerColor: '#cd0026',
            handleSize: '130%',
            handleIcon:
              'M10.7,11.9v-1.3H9.3v1.3c-4.9,0.3-8.8,4.4-8.8,9.4c0,5,3.9,9.1,8.8,9.4v1.3h1.3v-1.3c4.9-0.3,8.8-4.4,8.8-9.4C19.5,16.3,15.6,12.2,10.7,11.9z M13.3,24.4H6.7V23h6.6V24.4z M13.3,19.6H6.7v-1.4h6.6V19.6z',
            handleStyle: {
              color: '#fff',
              shadowBlur: 3,
              shadowColor: 'rgba(0,0,0,.3)',
              shadowOffsetX: 0,
              shadowOffsetY: 3
            }
          }
        ]
      }
      this.chartMixin_Dom2.setOption(option)
    },
    slideBarChange: throttle(500, function() {
      let {startValue,endValue} = this.chartMixin_Dom2.getOption().dataZoom[0]
      this.startValue = startValue
      this.endValue = endValue
    })
  },
  mounted() {
    this.initChart()
    this.initSlide()
    this.chartMixin_Dom2.on('dataZoom', this.slideBarChange)
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
.start,
.end {
  position: absolute;
  top: 80px;
}
.start {
  left: 70px;
}
.end {
  right: 70px;
}
</style>
