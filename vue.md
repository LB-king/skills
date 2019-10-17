#### 使用pug模板编写

component(:is='currentComponent')

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

#### swiper

更多的配置信息请参考：	https://www.swiper.com.cn/api/

```shell
cnpm install vue-awesome-swiper -S
```

按需引入

```java
import { swiper, swiperSlide } from 'vue-awesome-swiper'
//components: {swiper, swiperSlide}
.swiper-container
    swiper(:options="swiperOption", ref="mySwiper")
       swiperSlide.slider(v-for='(item,index) in arr') {{item}}
    .swiper-button-prev.swiper-button-black(slot="button-prev")
    .swiper-button-next.swiper-button-black(slot="button-next")
        
        
 //配置项
 swiperOption: {
    slidesPerView: 8,
    spaceBetween: 30,
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev'
    },
    allowTouchMove: false, // 不允许滑动切换
 }
//更详细信息参考官网 **
```

#### lodash

```shell
npm i --save lodash
```

```javascript
import _, { throttle } from 'lodash'
_.random(2, 7) // 取2-7之间的随机数 第三个参数表示是否支持小数
_random(2.4, 8.9) // 范围之间的随机数，包含小数
```

#### bettr-scroll

```shell
npm install better-scroll --save
```

```javascript
.main(ref='main')
      .content(ref='content',:style='contentWidth')
        div(v-for='i in list',:key='i') {{i}}
this.$nextTick(() => {
	this.scroll = new BScroll('.main', {
        scrollX: false,
        scrollY: true,
        bounce: {
          top: true,
          bottom: true,
          left: true,
          right: true
        },
        bounceTime: 700
      })
    })
```



#### ly-tab

```shell
npm install ly-tab --save
```

```javascript
// main.js中配置：
import Vue from 'vue'
import LyTab from 'ly-tab'
Vue.use(LyTab)
```

```javascript
// 其他组件使用
<ly-tab :items='items' v-model='selectedIndex' :options='options' @change='handleChange'></ly-tab>
export default {
    data () {
        return {
            items: [{label:'AAA'},{label:'BBB'}],
            selectedIndex: 0,
            options: {
                activeColor: 'red'
            }
        }
    }
}
```

#### v-model修饰符

- lazy:只有在input输入框发生blur时才触发
- trim:将用户输入的前后的空格去掉
- number:将用户输入的字符串转换成number

#### 函数防抖(debounce)

当一个动作连续触发，则执行最后一次

#### 函数节流(throttle)

限制一个函数在一定时间内只能执行一次