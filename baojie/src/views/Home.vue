<template>
  <div class="home">
    <el-row>
      <input
        v-model="val"
        type="number"
      />
      <el-table :data='tableData'>
        <el-table-column
          label='资源'
          prop=""
        >
          <template slot-scope="scope">
            <el-select v-model="scope.row.src" @change='seChange'>
              <el-option
                v-for='item in getSrc(scope.row)'
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
// let a = document.implementation.hasFeature('CompositionEvent', '3.0')
// console.log(a)
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'
export default {
  name: 'home',
  data() {
    return {
      val: '',
      tableData: [],
      resources: [
        { id: 1, name: '主题1' },
        { id: 2, name: '主题2' },
        { id: 3, name: '主题3' },
        { id: 4, name: '主题4' },
        { id: 5, name: '主题5' }
      ]
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
        src = this.resources.find(i => !usedSrc.includes(i.id)).id
      }
      this.tableData.push({
        src
      })
    },
    getSelectedSrc () {
      return this.tableData.map(item => item.src)
    },
    getSrc(row) {
      return this.resources.filter(item => !this.getSelectedSrc().includes(item.id) || row.src === item.id)
    }
  },
  components: {
    HelloWorld
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
