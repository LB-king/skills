<template lang='pug'>
  .robot robot
    el-row
      el-col(:span='3',:offset='21')
        span.tab_title(:class='{"active":curlabel==="sum"}',@click='tabChange("sum")') 汇总
        span |
        span.tab_title(:class='{"active":curlabel==='analyze'}',@click='tabChange("analyze")') 分析
    el-row
      el-col(:span='12')
        el-row.robot_title 当日统计
        el-table.mt15(:data='data.today',:header-cell-style='headerStyle')
          el-table-column(label="机器人名称", :show-overflow-tooltip="true", align="center")
            template(slot-scope="scope")
              i.fa.fa-bold
              span {{scope.row.name}}
          el-table-column(label="运行状态", :show-overflow-tooltip="true", align="center")
            template(slot-scope="scope")
              i.fa.fa-circle(:class='scope.row.status === "进行中" ? "blue" : "red"')
              span {{scope.row.status}}
          el-table-column(label="当日运行次数", :show-overflow-tooltip="true", align="center")
            template(slot-scope="scope")
              span {{scope.row.count}}次
          el-table-column(label="当日创值", :show-overflow-tooltip="true", align="center")
            template(slot-scope="scope")
              span ￥{{scope.row.value}}元
      el-col(:span='12')
        el-row.robot_title 历史汇总
        el-table.mt15(:data='data.history',:header-cell-style='headerStyle1')
          el-table-column(label="上线天数", :show-overflow-tooltip="true", align="center")
            template(slot-scope="scope")
              span {{scope.row.day}}天
          el-table-column(label="至今运行次数", :show-overflow-tooltip="true", align="center")
            template(slot-scope="scope")
              span {{scope.row.times}}次
          el-table-column(label="至今创值", :show-overflow-tooltip="true", align="center")
            template(slot-scope="scope")
              span {{scope.row.value}}元
</template>

<script>
export default {
  data() {
    return {
      curlabel: 'sum',
      data: {
        today: [
          {
            name: '发票校验',
            status: '进行中',
            count: 100,
            value: 1000
          },
          {
            name: '发票校验2',
            status: '已关闭',
            count: 50,
            value: 200
          }
        ],
        history: [
          {
            day: 55,
            times: 251,
            value: 5000
          },
          {
            day: 62,
            times: 321,
            value: 1254
          }
        ]
      }
    }
  },
  methods: {
    tabChange (val) {
      console.log(val)
    },
    headerStyle (row) {
      if (row.rowIndex === 0) {
        return 'background-color: #E3EFFB;'
      } else {
        return ''
      }
    },
    headerStyle1 (row) {
      if (row.rowIndex === 0) {
        return 'background-color: #DDF4C2;'
      } else {
        return ''
      }
    }
  },
  computed: {},
  mounted() {}
}
</script>

<style lang='scss'>
.robot {
  .robot_title {
    font-size: 16px;
    color: #333;
    font-weight: 600;
  }
  .fa-bold {
    color: #fff;
    height: 18px;
    width: 18px;
    background-color: #5b4283;
    line-height: 18px;
    text-align: center;
    border-radius: 3px;
    margin-right: 5px;
  }
  .fa-circle {
    margin-right: 5px;
  }
  .fa-circle.blue {
    color: #3480FF;
  }
  .fa-circle.red {
    color: #E51C23;
  }
  .mt15 {
    margin-top: 15px;
  }
  .active {
    color: #3480FF;
  }
  .tab_title {
    cursor: pointer;
  }
}
</style>
