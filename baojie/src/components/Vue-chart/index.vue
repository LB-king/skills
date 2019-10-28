<template lang='pug'>
  .main
    h4 vue-chart
    BarChart(:width='370', :height='246', :data='data', :options='options')
    el-row
      el-col(:span='6')
        PieChart(style='height:300px;')
</template>

<script>
import BarChart from './barChart.js'
import PieChart from './pieChart'
export default {
  name: 'Vue-chart',
  data () {
    return {
      data: {
        label: ['one', 'two', 'three'],
        datasets: [
          {
            label: '# of Votes',
            data: [11, 44, 33],
            backgroundColor: [
              'rgba(255, 99, 132, 0.2)',
              'rgba(54, 162, 235, 0.2)',
              'rgba(255, 206, 86, 0.2)'
            ],
            borderColor: [
              'rgba(255, 99, 132, 1)',
              'rgba(54, 162, 235, 1)',
              'rgba(255, 206, 86, 1)'
            ],
            borderWidth: 1
          }
        ]
      },
      options: {
        scales: {
          yAxes: [{
            ticks: {
              beginAtZero: true
            }
          }]
        }
      }
    }
  },
  components: {
    BarChart,
    PieChart
  },
  mounted() {
  }
}
</script>

<style>
</style>
