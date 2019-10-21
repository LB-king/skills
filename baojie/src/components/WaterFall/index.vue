<template lang='pug'>
  .wf
    h3 瀑布流布局
    waterfall(:col='3')
</template>

<script>
import waterfall from 'vue-waterfall2'
export default {
  name: 'waterfall',
  data() {
    return {
    }
  },
  components: {
    waterfall
  }
}
</script>

<style>
</style>
