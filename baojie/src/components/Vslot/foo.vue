<template lang='pug'>
  .foo
    header 头部
    slot(name='body') 默认主体部分
    slot(name='foot', tesmsg='子组件的值')
</template>

<script>
export default {
  name: 'foo',
  props: {
    msg: String
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.foo {
  height: 200px;
  width: 200px;
  border: 1px solid #bfc;
}
</style>
