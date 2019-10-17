<template lang='pug'>
  .robot robot
    el-row
      el-col(:span='12')
        el-row.robot_title 当日统计
        el-table(:data='data.today',:header-cell-style='headerStyle')
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
</template>

<script>
export default {
  data() {
    return {
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
        ]
      }
    }
  },
  methods: {
    headerStyle (row) {
      if (row.rowIndex === 0) {
        return 'background-color: #E3EFFB;'
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
}
</style>
