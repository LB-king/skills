<template>
  <div class="home">
    <el-row>
      <el-table :data='tableData'>
        <el-table-column label='资源'>
          <template slot-scope="scope">
            <el-select v-model="scope.row.src" @change='seChange'>
              <el-option
                v-for='item in getSrc(scope.row)'
                :key="item.name"
                :label="item.name"
                :value="item.name"
              ></el-option>
            </el-select>
          </template>
        </el-table-column>
        <el-table-column label='资源-内容'>
          <template slot-scope="scope">
            <el-select v-model="scope.row.src1">
              <el-option
                v-for='item in getSrc1(scope.row)'
                :key="item.id"
                :label="item.name"
                :value="item.id"
              ></el-option>
            </el-select>
          </template>
        </el-table-column>
        <el-table-column
          label='操作'
          prop=""
        >
          <template slot-scope="scope">
            <el-button
              @click="delRow(scope)"
              type='text'
            >删除</el-button>
          </template>
        </el-table-column>
      </el-table>
      <el-button @click="addRow">添加一行</el-button>
    </el-row>
  </div>
</template>

<script>
export default {
  name: 'home',
  data() {
    return {
      val: '',
      data: [
        {id:'111',name:'资源1',des:'资源1-选项1',price:1111},
        {id:'222',name:'资源1',des:'资源1-选项2',price:2222},
        {id:'333',name:'资源2',des:'资源2-选项1',price:3333},
        {id:'444',name:'资源2',des:'资源2-选项2',price:4444},
        {id:'555',name:'资源2',des:'资源2-选项3',price:5555}
      ],
      tableData: [],
      levels:[]
    }
  },
  computed:{
    resources () {
      let arr = []
      let res = []
      this.data.forEach(item => {
        if (arr.indexOf(item.name) === -1){
          arr.push(item.name)
          res.push({
            id:item.id,
            name:item.name
          })
        }
      })
      return res
    }
  },
  methods: {
    seChange (e) {
      console.log(this.tableData)
      console.log(this.getSelectedSrc())
    },
    delRow(r) {
      this.tableData.splice(r.$index, 1)
    },
    addRow() {
      if (this.tableData.length >= this.resources.length) return
      let src
      for (let i = 0; i < this.resources.length; i++) {
        let item = this.resources[i]
        let usedSrc = this.getSelectedSrc()
        src = this.resources.find(i => !usedSrc.includes(i.name)).name
      }
      this.tableData.push({
        src
      })
    },
    getSelectedSrc () {
      return this.tableData.map(item => item.src)
    },
    getSelectedSrc1 () {
      return this.tableData.map(item => item.src1)
    },
    getSrc(row) {
      return this.resources.filter(item => !this.getSelectedSrc().includes(item.name) || row.src === item.name)
    },
    getSrc1(row) {
      return this.data.filter(item => !this.getSelectedSrc1().includes(item.name) || row.src === item.name)
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
