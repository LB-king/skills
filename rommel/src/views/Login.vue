<template lang="pug">
  .login-in-wrapper
    el-button(type="primary") 登陆
    el-row
      el-color-picker(@change="colorChange" v-model="themeColor")
</template>

<script>
// @ is an alias to /src

export default {
  name: 'Login',
  data () {
    return {
      themeColor: '#409EFF'
    }
  },
  methods: {
    colorChange (v) {
      console.log(v)
    }
  }
}
</script>
