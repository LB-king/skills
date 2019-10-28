import { Bar } from 'vue-chartjs'
export default {
  extends: Bar,
  name: 'bar-chart',
  props: ['data', 'options'],
  data() {
    return {}
  },
  mounted() {
    this.renderChart(this.data, this.options)
  }
}
