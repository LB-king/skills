<template lang='pug'>
  .vue-dragable
    div dragable
    vueDragable.main-box(v-model='myArr', :move='move', @start='onStart')
      transition-group
        div.list(v-for='(item,index) in myArr', :key='index') {{item}}
    el-button(@click='addArr') Add
    el-row
      el-button(@click='setInfo') 添加localStorage
      el-button(@click='getInfo') 获取localStorage
</template>

<script>
import vueDragable from 'vuedraggable'
import lowdb from 'lowdb'
import LocalStorage from 'lowdb/adapters/LocalStorage'

const adapter = new LocalStorage('test.db')
const db = lowdb(adapter)
export default {
  name: 'dragable',
  data() {
    return {
      myArr: [
        '可拖拽的块A',
        '可拖拽的块B',
        '可拖拽的块C',
        '可拖拽的块D',
        '可拖拽的块E',
        '可拖拽的块F',
        '可拖拽的块G'
      ],
      people: []
    }
  },
  updated() {
    // console.log(this.myArr)
  },
  components: {
    vueDragable
  },
  created() {},
  methods: {
    setInfo() {
      db.defaults({ posts: [], user: {}, count: 0 }).write()
      db.get('posts')
        .push({ id: 2, title: 'Kobe222' })
        .write()
    },
    getInfo() {
      let res = db.get('posts')
        .find({ id: 2 })
        .value()
      console.log(res)
    },
    // 移动的事件(有2个参数:最近的元素，拖拽事件)-注意监听的时候是用:move
    move(relatedElement, dragEvent) {
      console.log(relatedElement.relatedContext.element)
    },
    // start,add,remove,update,end,choose,unchoose,sort,filter,clone
    onStart(e) {
      // console.log(e)
    },
    onAdd(el) {
      console.log(el)
    },
    addArr() {
      this.myArr.push('NEW-ITEM')
    }
  }
}
</script>

<style lang='scss' scoped>
.main-box {
  width: 200px;
  margin: 0 auto;
}
.list {
  height: 36px;
  line-height: 36px;
  border: 1px solid #cccccc;
  margin: 5px 0;
  cursor: move;
}
</style>
