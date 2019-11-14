### 1.call和applay区别

都是Function.prototype上的方法，都是用来改变函数this指向的，区别是call接的是参数列表，apply接的是数组

```javascript
function fn(x, y, z) {
    this.x = x
}
let obj = {}
fn.call(obj,11,22,33)
fn.apply(obj,[11,22,33])

let args = [11,22,33]
fn.apply(obj, args)
fn.call(obj, ...args) //展开运算符
```

bind(obj)预先改变this，并未立即执行

call性能优于apply

测试一段程序代码执行的时间：

```javascript
console.time('TAG')
console.timeEnd('TAG')
```

### 2.实现(3).add(2).minus(3)

```javascript
!function (){
    function check(n) {
        return isNaN(Number(n)) ? 0 : Number(n)
    }
    function add (n) {
        return this + check(n)
    }
    function minus () {
        return this - check(n)
    }
    ['add','minus'].forEach(item => {
        Number.prototype[item] = eval(item)
    })
}()
(3).add(2).minus(3)
```

链式写法，将方法放到原型上

### 3.箭头函数

问题：箭头函数与普通函数的区别？构造函数(function)可以使用`new`生成实例，那么箭头函数可以吗？为什么？

解析：

区别：

1.箭头函数语法上比普通函数更加简洁

2.箭头函数没有自己的**this**，它里面的`this`从属于函数所处的上下文，call与apply无法改变this的指向

3.箭头函数中没有**arguments**，只能基于**...arg**获取传递的参数集合

4.箭头函数不能被new执行(因为：箭头函数没有**this**、没有**prototype**)

```javascript
document.body.onclick = () => {
    // THIS->WINDOW
}
document.body.onclick = function () {
    // THIS->BODY
    arr.sort(function(a, b){
        // THIS->WINDOW  回调函数中THIS指向WINDOW
        return a - b
    })
}
```

回调函数

```javascript
function each(arr, callback) {
    for(let i = 0;i < arr.length;i++) {
        callback(arr[i], i)
    }
}
each([12,34,22],function (item, index) {
    
})
```

### 4.0.1+0.2的问题

```javascript
function toFixed(num, s){
  let times = Math.pow(10, s)
  let des = num * times + 0.5
  des = parseInt(des, 10) / times
  return des + ''
}
```

### 5.regExp

`\`:将下一个字符标记为特殊字符、或一个愿义字符、或一个向后引用、或一个八进制转义符。例如："n"匹配字符"n","\n"匹配一个换行符。"\\\\"匹配"\","\\("匹配"("。

`^`:匹配输入字符串的开始位置。如果设置了RegExp的Multiline属性，^也匹配"\\n"或"\\r"之后的位置。

`$`:匹配输入字符串的结束位置。如果设置了RegExp的Multiline属性，$也匹配"\\n"或"\\r"之前的位置。

`*`:匹配前面的子表达式0次或多次。例如：zo*可以匹配"z"以及"zoo"。\*等价于{0,}。

`+`:匹配前面的子表达式1次或多次。例如：zo+可以匹配"zo"以及"zoo"，但不能匹配"z"。+等价于{1,}。

`?`：匹配前面的表达式0次或1次。例如"do(es)?"可以匹配"does"或"does"中的"do"。?等价于{0,1}。

`\b`:匹配一个单词边界，也就是指单词和空格间的位置。例如："er\b"可以匹配"never"中的"er",但不能匹配"verb"中的"er"。

`\B`:匹配非单词边界。"er\B"可以匹配"verb"中的"er"，但不能匹配"never"中的"er"。

`\d`:匹配一个数字字符。等价于[0-9]。

`\D`:匹配一个非数字字符。等价于\[^0-9]。

`f`:匹配一个换页符。等价于\x0c和\cL。

`n`:匹配一个换行符。等价于\x0a和\cj。

`s`:匹配任何空白字符，包括空格、制表符、换页符等等。等价于\[\f\n\r\t\v]。

`S`:匹配任何非空白字符。等价于\[^\f\n\r\t\v]。

`w`:匹配包括下划线的任何单词字符。等价于"[A-Za-z0-9]"。

`W`:匹配任何非单词字符。等价于"\[^A-Za-z0-9]"。

正向预查**?=**

负向预查**?!**

- ```javascript
  /123/.exec('456123') // ["123", index: 3, input: "456123", groups: undefined]
  ```

- ```javascript
  /123/.test('456123') // true
  ```

- ```javascript
  '85234123'.match(/234/) // ["234", index: 2, input: "85234123", groups: undefined]
  ```

### 6.重写一个indexOf方法

```javascript
// 使用正则
function myIndexOf (str) {
    let reg = new RegExp(str),
        res = reg.exec(this)
    return res === null ? -1 : res.index
}
!function () {
  String.prototype.myIndexOf = myIndexOf  
}()
// 另一种思路：循环string，截取目标字符串片段长度的匹配项
```

### 7.图片的懒加载

+ 前端性能优化的重要方案
  - 通过图片或者数据的延迟加载，我们可以加快页面渲染的速度，让第一次打开页面的速度变快
  - 只有滑动到某个区域，我们才加载真实的图片，这样可以节省加载的流量

- 处理方案
  - 代码自己写

### 8.字符串6-16位，必须同时包含有大小写字母和数字

```javascript
let reg = /(?!^[a-zA-Z]+$)(?!^[a-z0-9]+$)(?!^[A-Z0-9]+$)(?!^[0-9]+$)^[a-zA-Z0-9]{6,16}$/
```

### 9.数组扁平化

```javascript
let arr=[12,3[3,4,9,[55,66]]]
//1.arr=arr.flat(Infinity)
//2.arr=arr.toString().split(',')
//3.arr=JSON.stringify(arr).replace(/(\[|\])/g,'')
//4.some结合展开运算符...
while(arr.some(item=>Array.isArray(item))){
  arr = [].concat(...arr)
}
//5.递归算法搞定
!function () {
      function myFlat() {
        let _this = this
        let res = []
        let fn = (arr) => {
          for (let i = 0; i < arr.length; i++) {
            if (Array.isArray(arr[i])) {
              fn(arr[i])
              continue
            }
            res.push(arr[i])
          }
        }
        fn(_this)
        return res
      }
      Array.prototype.myFlat = myFlat
    }()
```

### 10.push方法的思考

```javascript
let obj = {
	2: 3,
    3: 4,
    length: 2,
    push: Array.prototype.push
}
obj.push(1)
obj.push(2)
console.log(obj)
```

