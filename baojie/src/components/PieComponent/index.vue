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
          ]
        },
        {
          name: '访问来源',
          type: 'pie',
          radius: ['40%', '55%'],
          label: {
            normal: {
              formatter: '{a|{a}}{abg|}\n{hr|}\n  {b|{b}：}{c}  {per|{d}%}  ',
              backgroundColor: '#eee',
              borderColor: '#aaa',
              borderWidth: 1,
              borderRadius: 4,
              rich: {
                a: {
                  color: '#999',
                  lineHeight: 22,
                  align: 'center'
                },
                hr: {
                  borderColor: '#aaa',
                  width: '100%',
                  borderWidth: 0.5,
                  height: 0
                },
                b: {
                  fontSize: 16,
                  lineHeight: 33
                },
                per: {
                  color: '#eee',
                  backgroundColor: '#334455',
                  padding: [2, 4],
                  borderRadius: 2
                }
              }
            }
          },
          data: [
            { value: 100, name: '邮件营销' },
            { value: 200, name: '联盟广告' },
            { value: 100, name: '视频广告' },
            { value: 600, name: 'RPA' }
          ]
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
