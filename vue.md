#### 指令、自定义指令

- v-text:显示文本内容

- v-html:可以解析html代码片段

- v-show:相当于style='display:none'

- v-if:相当于代码注释  v-if v-else

- v-for:遍历数组

- v-on (@) 绑定事件 @keyup.13

- v-bind (:) 绑定属性值 :value='XXX'

- v-model:双向绑定

- v-once:只绑定一次

- v-cloak:双胡子闪动的问题

  ```css
  [v-cloak] {
      display: none;
  }
  ```

- 数据持久化(对文件进行修改||直接对数据库进行操作)

#### 组件、自定义组件

Vue.component('name',{})

#### 生命周期-钩子函数

- beforeCreate

- created

- beforeMount

- mounted

- beforeUpdate

- Updated

- beforeDestroy

- destroyed---this.$destroy()销毁对象的方法

  ```javascript
  //1. 实例化一个vue对象
  
  //2. 需要对对象里面的属性和方法做一些配置，初始化
  
     //created：完成前2个步骤
  
  //3. 把vue挂载到id=app的元素上
  
     //mounted：以上3步已经完成
  
     //事件对象e.target.value(表示这个dom对象)
  
     //计算属性：totalprice
  
     //Array.prototype.splice(index,1)
  ```

#### 计算属性

#### vue-router

响应路由参数的变化：

当从user/foo到user/bar的时候，原来的组件会被复用，因为两个路由都渲染同一个组件，比起销毁和创建，复用则显得更加高效。

**不过，这也意味着组件的生命周期钩子不会再被调用**

1-复用组件时，想对路由参数的变化做出响应的话，可以**watch**(监测变化)$route 对象；

```javascript
const user = {
    temlate: '...',
    watch: {
        '$route'(to, from) {
            // 对路由变化做出响应
        }
    }
}
```

2-也可以使用**beforeRouteUpdate**导航守卫

```javascript
const user = {
    template:'...',
    beforeRouteUpdate (to, from, next) {
        //需要做出的操作
        //别忘了 next()--否则会一直在加载中的状态
    }
}
```



```javascript
//声明式
<router-link :to='...'>
//编程式的导航
// 1.字符串
this.$router.push('home')
// 2.对象
this.$router.push({path:'home'})
// 3.命名的路由
this.$router.push({name:'home',params:{id:111}})
// 4.带查询参数，变成/register?plan=private
this.$router.push({path:'register',query:{plan:'rivate'}})
```

**注意：**如果提供了path，params会被忽略，可以用如下的写法代替：

```javascript
let id = 123
this.$router.push({name:'user',params:{id}})-->user/123
this.router.push({path:`/user/${id}`}) -->user/123
```

- beforeRouterEnter-->第一次进入或从其他组件对应路由进入时触发
- beforeRouterUpdate-->在同一组件对应的多个路由间切换时触发

#### vuex

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

#### font-awesome

```shell
cnpm i -S font-awesome
```



#### v-model修饰符

- lazy:只有在input输入框发生blur时才触发
- trim:将用户输入的前后的空格去掉
- number:将用户输入的字符串转换成number

#### 函数防抖(debounce)

当一个动作连续触发，则执行最后一次

#### 函数节流(throttle)

限制一个函数在一定时间内只能执行一次



#### 锚点与router

```vue
<a href='' @click.prevent='anchorClicked'></a>
```

```javascript
anchorClicked () {
    let el = document.getElementById('XXX')
    let scrollTopHeight = el && el.offsetTop
    window.scrollTo({
        top: scrollTopHeight,
        behavior: 'smooth' // 加上smooth就会有一种平滑的效果
	})
}
```

#### vuedraggable

```shell
cnpm i -S vuedraggable
```

```javascript
import vueDragable from 'vuedraggable'
​```components: {vueDragable}
// 在vue中引用
vueDragable.main-box(v-model='myArr', :move='move', @start='onStart')
   transition-group
     div.list(v-for='(item,index) in myArr', :key='index') {{item}}
```



#### require.context

三个参数：

- directory--需要检索的目录
- useSubdirectories--是否读取子目录
- regExp--匹配文件的正则表达式

```shell
require(directory,useSubdirectory,regExp)
```



#### chartjs

```shell
cnpm install vue-chartjs chart.js --save
```

