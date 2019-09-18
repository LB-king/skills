<template>
  <div class="home">
    <el-row>
      <el-col :span="5">
        <input v-model="val" type="number"/>
      </el-col>
    </el-row>
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'
export default {
  name: 'home',
  data() {
    return {
      val: ''
    }
  },
  methods: {
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
