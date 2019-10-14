<template lang='pug'>
  .pie
    #main_pie(ref='main')
</template>

<script>
let echarts = require('echarts')
export default {
  name: 'PieComponent',
  data() {
    return {}
  },
  mounted() {
    let myChart = echarts.init(document.getElementById('main_pie'))
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
                return params.data.color
                // console.log(params)
                // return ['#45a3fc', '#47cbca', '#95d2fc', '#c5eafe'][params.dataIndex]
              }
            }
          }
        }
      ]
    }
    myChart.setOption(option)
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
