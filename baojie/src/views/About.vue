<template lang='pug'>
  .main
    el-table(:data='tableData')
      el-table-column(label='第一个选项')
        template(slot-scope='scope')
          el-select(v-model='scope.row.src')
            el-option(v-for='item in getSrc(scope.row)', :key='item', :label='item', :value='item')
      el-table-column(label='第二个选项')
        template(slot-scope='scope')
          el-select(v-model='scope.row.src1')
            el-option(v-for='item in getSrc1(scope.row)', :key='item', :label='item', :value='item')
      el-table-column(label='操作')
        template(slot-scope='scope')
          el-button(type='text',size='min',@click='delRow(scope)') 删除
    el-row
      el-button(@click='addRow') 点击添加
</template>

<script>
export default {
  name: 'home',
  data() {
    return {
      val: '',
      data: [
        { name: '资源1', des: '资源1-选项1', price: 1111 },
        { name: '资源1', des: '资源1-选项2', price: 2222 },
        { name: '资源2', des: '资源2-选项1', price: 3333 },
        { name: '资源2', des: '资源2-选项2', price: 4444 },
        { name: '资源2', des: '资源2-选项3', price: 5555 }
      ],
      tableData: [],
      levels: []
    }
  },
  computed: {
    resources() {
      return this.groupByKey(this.data, 'name')
    }
  },
  methods: {
    delRow(scope) {
      this.tableData.splice(scope.$index, 1)
    },
    addRow() {
      this.tableData.push({
        src: '',
        src1: ''
      })
    },
    getSrc(row) {
      let src = row.src
      let data = Object.keys(this.groupByKey(this.data, 'name'))
      let arr = this.tableData.filter(item => item.src === row.src)
      if (src) {
        // console.log(this.groupByKey(this.data, 'name')[src])
      }
      return data
    },
    getSrc1(row) {
      let src = row.src
      if (src) {
        return this.groupByKey(this.data, 'name')[src]
      }
    },
    getSelectedSrc() {
      let arr = []
      if (this.tableData.length) {
        for (let i = 0; i < this.data.length; i++) {
          if (this.tableData.find(item => item.src === this.data[i].name && item.src1 === this.data[i].des)){
            arr.push(this.data[i])
          }
        }
      }
      return arr
    },
    groupByKey(arr, property) {
      return arr.reduce((acc, obj) => {
        let key = obj[property]
        if (!acc[key]) {
          acc[key] = []
        }
        acc[key].push(obj.des)
        return acc
      }, {})
    }
  }
}
</script>
<style lang="scss">
input::-webkit-outer-spin-button,
input::-webkit-inner-spin-button {
  -webkit-appearance: none !important;
  input[type='number'] {
    -moz-appearance: textfield;
  }
}
</style>
