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

```jade
ValidationProvider(rules='secret', v-slot='{errors}')
  el-input(v-model='val')
  span {{errors[0]}}
```



```javascript
function formatterPrice (price) {
  if (price) {
    return price.toString().replace(/(?=(\B)(\d{3})+$)/g, ',')
  } else {
    return ''
  }
}
```

#### 引入dayjs

```shell
cnpm i dayjs --save
```

```javascript
import dayjs from 'dayjs'
import weekOfYear from 'dayjs/plugin/weekOfYear'
dayjs.extend(weekOfYear)
dayjs().format('YYYY-MM-DD HH:mm:ss') //2019-10-10 19:08:09
dayjs().format('YYYY年MM月DD日 HH:mm') //2019年10月10日 19:08
dayjs(1570705887906).format('YYYY年MM月DD日 HH:mm:ss') //2019年10月10日 19:11:27
dayjs('2019-12-12 1:2:3').format('YYYY年MM月DD日 HH:mm:ss') //2019年12月12日 01:02:03
//diff获取两个Dayjs对象的时间差，默认毫秒
dayjs('2019-10-10').diff(dayjs('2019-10-1'), 'day') // 9
//daysInMonth 返回月份的天数
dayjs().daysInMonth() //31
//当前是本年度的第几周
dayjs('2019/10/1').week() //40
```

#### 全局sass

```javascript
module.exports = {
  // 配置全局样式的变量
  css: {
    loaderOptions: {
      sass: {
        data: `@import '~@/assets/style/common/mixin.scss';`
      }
    }
  }
}
//组件中可以使用scss中定义的类名
```

```scss
// 这是全局的scss定义
$baseColor:#bfc;
.globalColor {
    #016b1c;
}
// globalColor这个类名就可以直接使用啦
```

```scss
// mixin的用法
@mixin test {
  font-size: 20px;
  color: red;
}
.fz {
  @include test;
}
.main {
	color:$baseColor;
}
```

