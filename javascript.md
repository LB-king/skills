#### 1.数组的一些方法

- ##### some()

  ```javascript
  // some()方法测试数组中是不是至少有1个元素通过了被提供的测试函数。它返回的是Boolean类型的值。
  [1,2,3,44].some(item => item === 2) //true
  ```

- ##### every()

  ```javascript
  // every()方法测试一个数组内所有元素是否都能通过某个指定函数的测试。它返回一个Boolean值 。
  [1,2,3].every(item => item > 0) //true
  ```

- ##### concat()

  ```javascript
  // concat()用于合并2个或者多个数组。此方法不会更改现有的数组，而是返回一个新的数组。
  [11,22,33].concat(55) //[11,22,33,55]
  ```

- ##### find()

- ##### forEach

- ##### findIndex

- ##### filter

- ##### map

- ##### reduce

- push

- pop

- shift

- unshift

- indexOf

- splice

#### 2.call、applay、bind

- ##### Function.prototype.call()

  - call()方法使用一个指定的this值和单独给出的一个或多个参数来调用一个函数。

  - 该方法的语法和作用与apply相似，只有一个区别，那就是call()方法接受的是一个**参数列表**，而apply接受的是**一个包含多个参数的数组**。

    ```javascript
    function Product(name, price) {
        this.name = name
        this.price = price
    }
    function Food() {
        Product.call(this, name, price)
        this.category = 'food'
    }
    console.log(new Food('cheese', 4).name)  //cheese
    ```

- ##### Function.prototype.apply()

  - apply()方法调用一个具有给定this值的函数，以及作为一个数组提供的参数。

- ##### Function.prototype.bind()

  - bind()方法创建一个新的函数，在bind()被调用时，这个新函数的`this`被bind的第一个参数指定，其余参数作为新函数的参数供调用时使用。

    ```javascript
    let module = {
        x: 66,
        getX: function() {
            return this.x
        }
    }
    //bound-边界
    let unboundGetX = module.getX() //undefined
    let boundGetX = unboundGetX.bind(module) //66
    ```

    

```javascript
'2783648720'.replace(/\B(?<!(\.\d+))(?=(\d{3})+\b)/g,",")
```

