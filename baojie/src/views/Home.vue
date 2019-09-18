<template>
  <div class="home">
    <el-row>
      <el-col :span="5">
        <el-input
          v-model="val"
          type="number"
          @keydown.native="down"
        ></el-input>
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
    down (e) {
      e.target.value = e.target.value.replace(/[^\d]/g,"")
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
