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
//使用正则
function myIndexOf (str) {
    let reg = new RegExp(str),
        res = reg.exec(this)
    return res === null ? -1 : res.index
}
!function () {
  String.prototype.myIndexOf = myIndexOf  
}()
//另一种思路：循环string，截取目标字符串片段长度的匹配项
```

