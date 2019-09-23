<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <el-button @click="sub">点击提交</el-button>
    <el-upload
      ref="up"
      class="upload-demo"
      drag
      action="123"
      :auto-upload="false"
      :http-request='httpRequest'
    >
      <i class="el-icon-upload"></i>
      <div class="el-upload__text">
        将文件拖到此处，或
        <em>点击上传</em>
      </div>
      <div class="el-upload__tip" slot="tip">只能上传jpg/png文件，且不超过500kb</div>
    </el-upload>
  </div>
</template>

<script>
import axios from 'axios'
export default {
  name: "HelloWorld",
  data() {
    return {
      // action: "upload"
    };
  },
  props: {
    msg: String
  },
  methods: {
    httpRequest(params){
      console.log(params.file)
    },
    action() {
      return process.env.NODE_ENV === "development" ? "kaifa/" : "shengchan/";
    },
    sub() {
      console.log(process.env.NODE_ENV);
      // new Promise((resolve, reject) => {
      //   this.action =
      //     process.env.NODE_ENV === "development" ? "kaifa/" : "shengchan/";
      //   resolve();
      // }).then(() => {
      this.$refs.up.submit();
      // });
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
