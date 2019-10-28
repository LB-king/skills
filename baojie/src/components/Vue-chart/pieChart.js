import { Pie } from 'vue-chartjs'
export default {
  name: 'pie',
  extends: Pie,
  data () {
    return {
      pieData: {
        datasets: [
          {
            data: [10, 20, 30],
            backgroundColor: [
              'rgba(255, 99, 132, 0.2)',
              'rgba(54, 162, 235, 0.2)',
              'rgba(255, 206, 86, 0.2)'
            ]
          },
          {
            data: [20, 40, 60]
          }
        ],
        labels: ['red', 'yellow', 'blue']
      }
    }
  },
  mounted () {
    this.renderChart(this.pieData)
  }
}
