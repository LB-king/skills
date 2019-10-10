<template lang='pug'>
  .vslot
    h2 v-slot
    foo
      //- h6(slot='body') 父组件的slot直接挂在标签上
      //- div(slot='foot',slot-scope='prop') {{prop.tesmsg}}
      //- v-slot在vue2.6之后推行，3.0会抛弃之前的用法,父组件的用法如下所示
      template(#body)
        div body新内容
      template(#foot='prop') {{prop.tesmsg}}
</template>

<script>
import foo from './foo'
export default {
  name: 'Vslot',
  components: {
    foo
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
</style>
