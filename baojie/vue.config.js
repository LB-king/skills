module.exports = {
  // 配置全局样式的变量
  css: {
    sourceMap: true,
    loaderOptions: {
      sass: {
        data: `@import '~@/assets/style/common/mixin.scss';`
      }
    }
  }
}
