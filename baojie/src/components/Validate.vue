<template lang='pug'>
  .validate validate
    ValidationProvider(rules='secret', v-slot='{errors}')
      el-input(v-model='val')
      span {{errors[0]}}
</template>

<script>
export default {
  computed: {},
  data() {
    return {
      val: ''
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
</style>
