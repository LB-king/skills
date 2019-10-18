<template lang='pug'>
  .sum_module 汇总
    //- el-row
    //-   el-col(:span='12')
    //-     el-row.robot_title 当日统计
    //-     el-table.mt15(:data='data.today',:header-cell-style='headerStyle')
    //-       el-table-column(label="机器人名称", :show-overflow-tooltip="true", align="center")
    //-         template(slot-scope="scope")
    //-           i.fa.fa-bold
    //-           span {{scope.row.name}}
    //-       el-table-column(label="运行状态", :show-overflow-tooltip="true", align="center")
    //-         template(slot-scope="scope")
    //-           i.fa.fa-circle(:class='scope.row.status === "进行中" ? "blue" : "red"')
    //-           span {{scope.row.status}}
    //-       el-table-column(label="当日运行次数", :show-overflow-tooltip="true", align="center")
    //-         template(slot-scope="scope")
    //-           span {{scope.row.count}}次
    //-       el-table-column(label="当日创值", :show-overflow-tooltip="true", align="center")
    //-         template(slot-scope="scope")
    //-           span ￥{{scope.row.value}}元
    //-   el-col(:span='12')
    //-     el-row.robot_title 历史汇总
    //-     el-table.mt15(:data='data.history',:header-cell-style='headerStyle1')
    //-       el-table-column(label="上线天数", :show-overflow-tooltip="true", align="center")
    //-         template(slot-scope="scope")
    //-           span {{scope.row.day}}天
    //-       el-table-column(label="至今运行次数", :show-overflow-tooltip="true", align="center")
    //-         template(slot-scope="scope")
    //-           span {{scope.row.times}}次
    //-       el-table-column(label="至今创值", :show-overflow-tooltip="true", align="center")
    //-         template(slot-scope="scope")
    //-           span {{scope.row.value}}元
</template>

<script>
export default {
  data() {
    return {
    }
  },
  methods: {
  },
  computed: {},
  mounted() {}
}
</script>

<style lang='scss'>
</style>
