#### 使用pug模板编写

```shell
npm install pug pug-loader pug-plain-loader -S
```

在.vue文件中使用

```html
<template lang='pug'>
	.main 编写HTML的内容...
</template>
```

#### 引入vee-validate

```shell
npm install vee-validate -S
```

在main.js中配置

```javascript
import { ValidationProvider, extend } from 'vee-validate'
// rules自己定义
extend('secret', {
  validate: value => value === 'example',
  message: 'msg'
})
Vue.component('ValidationProvider', ValidationProvider)
```

在.vue中使用

```vue
ValidationProvider(rules='secret', v-slot='{errors}')
    el-input(v-model='val')
    span {{errors[0]}}
```



