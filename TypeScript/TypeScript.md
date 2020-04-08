### 简介

#### 什么是TypeScript

**TypeScripe**是**JavaScript**的一个超集，主要提供了系统类型和对ES6的支持。

优势：

- TS增加了代码的可读性和可维护性
  - 类型系统实际上是最好的文档，大部分的函数看看类型的定义就知道如何使用了
  - 可以在编译阶段就发现大部分错误，这要比在运行时出错好
  - 增强了编辑器的IDE功能，包括代码补全、接口提示、跳转到定义、重构等
- TS非常包容
  - ts是js的超集，`.js`文件可以直接重命名为`.ts`
  - 即使不显式的定义类型，也能够自动做出`类型推论`
  - 可以定义从简单到复杂的几乎一切类型
  - 即使ts编译报错，也可以生成js文件
  - 兼容第三方库

#### 安装TypeScript

```powershell
npm install typescript -g
```

全局安装成功后，可以在cmd命令窗口使用`tsc -V`查看安装的版本信息

编译一个ts文件

```shell
tsc hello.ts
```

我们约定使用TypeScript编写的文件以`.ts`结尾，用TypeScript编写React时，以`.tsx`结尾

#### 开始使用

新建hello.ts文件，写入以下代码，执行之

```typescript
function sayHello(person:string){
    return 'hello,' + person
}
console.log(sayHello('kobe'))
```

然后执行命令

```powershell
tsc hello.ts
```

这时会生成hello.js

```javascript
function sayHello(person) {
    return 'hello,' + person;
}
console.log(sayHello('kobe'));
```

ps:vscode会出现'函数变量名重复'的警告

解决方案：在项目根目录新建一个tsconfig.json,即使是空的也可以避免这个警告

TypeScript中，使用`:`指定变量的类型，`:`的前后有没有空格都可以。

上述例子中，我们用`:`指定`person`参数类型为`string`。但是编译为js之后，并没有检查的代码被插入进来。

**ts只会进行静态检查，如果发现错误，编译的时候就会报错。**

**即使报错，还是会生成编译结果**

在报错的时候如果要终止js文件的生成，可以在tsconfig.json中配置`noEmitOnError`即可

### 基础

#### 原始数据类型

js数据类型分为2种：原始数据类型(primitive data types)和对象类型(object types)

原始数据类型包括：布尔值、数值、字符串、null、undefined、以及es6里的symbol

##### 布尔值

使用`boolean`定义布尔值

```typescript
let isDnone:boolean = false
```

```javascript
var isDnone = false;
```



new Boolean()返回的是一个Boolean对象

直接Boolean(1)返回一个boolean类型

##### 数值

使用`number`定义数值类型

```typescript
let decLiteral: number = 6
```

es6中的二进制和八进制会被编译成十进制数字。

##### 字符串

使用`string`定义

```typescript
let myName: string = 'Tom'
let myAge: number = 22
let sentence: string = `Hello,my name is ${myName} and I'm ${myAge}`
```

编译后

```javascript
var myName = 'Tom';
var myAge = 22;
var sentence = "Hello,my name is " + myName + " and I'm " + myAge;
```

##### 空值

js中没有空值(Void)的概念,在ts中，可以用`void`表示没有任何返回值的函数

```typescript
function getName():void {
    alert('name is ok')
}
```

编译后

```javascript
function getName() {
    alert('name is ok');
}
```

##### Null和Undefined

在ts中，可以用`null`和`undefined`来定义这两个原始数据类型

```typescript
let u:undefined = undefined
let n:null = null
```

与`void`的区别是，`null`和`undefined`是所有类型的子类型

```typescript
//这样不会报错
let num:number = undefined
let u:undefined
let num:number = u
//而void类型的变量不能赋值给number类型的变量,编译报错
let u:void
let num:number = u
```

##### 任意值

`any`类型，允许被赋值为任意类型

```typescript
let myFavorite: any = 'seven'
myFavorite = 7
```

#### 类型推论

如果没有明确的指定类型，那么ts会依照类型推论的规则推断出一个类型

```typescript
let str = 'seven'
str = 7
//编译会报错，因为ts会在没有明确指定类型的时候推测出一个类型，这就是类型推断
```

如果定义的时候没有赋值，就会被推断成`any`类型

```typescript
let str
str = 'six'
str = 6
```

#### 联合类型

联合类型(Union Types)表示取值可以为多种类型中的一种

```typescript
let str :string | number
str = 'six'
str = 6
```

```typescript
let str:string | number
str = true
/编译报错
```

#### 访问联合类型的属性或方法

当ts不确定一个联合类型的变量到底是哪个类型的时候，我们只能访问此联合类型的所有类型里共有的属性或方法

```typescript
function getLength(sth: string|number):number{
    return str.length
}
```

##### 对象的类型--接口

在ts中，我们使用接口(interfaces)来定义对象的类型

```typescript
interface Person {
    name: string
    age: number
}
let tom:Person = {
    name:'tom',
    age: 23
}
```

多一些和少一些属性都是不允许的，可见，赋值的时候，变量的形状必须和接口的形状保持一致

例如

```typescript
interface Person {
    name: string
    age: number
}
let tom:Person = {
    name:'tom'
}
```

##### 可选属性

有时候我们希望不要完全匹配一个形状，呢么可以使用可选属性：

```typescript
interface Person {
    name:string
    age?:number
}
let tom:Person = {
    name:'ok'
}
```

可选属性的含义是该属性可以不存在。

仍然不允许添加未定义的属性

```typescript
interface Person {
    name: string
    age?: number
}
let tom:Person = {
    name: 'tom',
    age: 88,
    gender:'male'
}
// 编译报错
```

##### 任意属性

有时候我们希望一个接口有任意的属性，可以使用如下方式：

```typescript
interface Person{
    name:string
    age?:number
    [propName:string]:any
}
let tom:Person = {
    name:'tom',
    gender:'male'
}
```

注意：**一旦定义了任意属性，那么确定属性和可选属性的类型都必须是它的类型的子类**

```typescript
interface Person{
    name:string
    age?:number
    [propName:string]:any
}
let tom:Person = {
    name:'tom',
    gender:'male'
}
```

```typescript
interface Person{
    name:string
    age?:number
    [propName:string]:string
}
let tom:Person = {
    name:'tom',
    age:55,
    gender:'male'
}
//会报错
```

##### 只读属性

用`readonly`定义，对象中的一些字段只能在创建的时候被赋值

```typescript
interface Person{
    readonly id: number
    name:string
    age?:number
    [propName:string]: any
}
let t:Person = {
    id:9999,
    name:'tom'
}
t.id = 888
//会报错--只读的约束存在于第一次给对象赋值的时候，而不是第一次给只读属性赋值的时候
```



#### 数组的类型

在ts中，数组类型有多种定义方式，比较灵活

- [类型+方括号]-表示法

  ```typescript
  let fibonacci:number[] = [1,1,2,3,5]
  ```

  数组的项中不允许出现其他的类型

  ```typescript
  let fibonacci:number[] = [1,'1',2,3,5]
  fibonacci.push('L')
  //都会报错
  ```

- 数组泛型(Array Generic)`Array<elemType>`来表示数组

  ```typescript
  let fibonacci:Array<number> = [1,1,2,3,5]
  ```

- 用接口表示数组

  ```typescript
  interface NumberArray{
      [index:number]:number
  }
  let fibonacci:NumberArray = [1,1,2,3,5]
  ```

  只要索引的类型是数字时，那么值的类型必须是数字，一般用前两种方式来描述数组(简单点)，但是可用它来表示类数组。

- 类数组(Array-like Object)

  ```typescript
  function sum() {
      let args: {
          [index:number]:number
          length:number
          callee:Function
      } = arguments
  }
  ```

  常用的类数组都有自己的接口定义，如`IArguments`、`NodeList`、`HTMLCollection`

  ```typescript
  function sum() {
      let args:IArguments = arguments
  }
  //其中IArguments是ts中定义好的类型，它实际上就是
  interface IArgumens{
      [index:number]:number
      length:number
      callee:Function
  }
  ```

- any在数组中的应用

  ```typescript
  let list:any[] = [1,'ok',{name:'tome'}]
  ```

  

#### 函数的类型

在js中，有两种常见的定义函数的方式--函数声明和函数表达式

```javascript
//函数声明(Function Declaration)
function sum(a, b) {
    return a + b
}
//函数表达式
let mySum = function (x, y) {
    return x + y
}
```

- 函数声明

一个函数有输入和输出，要在ts中对其进行约束，需要把输入和输出都考虑到，其中函数声音声明的类型比较简单:

```typescript
function sum(x:number, y:number): number {
    return x + y
}
sum(1,2,3) //输入多余或者少于要求的参数，是不被允许的，报错
```

- 函数表达式

```typescript
let mySum = function (x:number, y:number) {
    return x + y
}
```

能通过编译，不过事实上，上面的代码只对等号右侧的匿名函数进行了类型定义，而等号左边的`mySum`,是通过赋值操作进行类型推断出来的。手动给`mySum`添加类型。

```typescript
let mySum:(x:number, y:number) => number = function (x:number, y:number) {
    return x + y
}
```

注意不要混淆了ts中的`=>`和ES6中的`=>`。

在ts的类型定义中，`=>`用来表示函数的定义，左边是输入类型，需要用括号括起来，右边是输出类型。

ES6中`=>`表示箭头函数

- 用接口定义函数的形状

  ```typescript
  interface SearchFunc {
      (source:string,subString:string): boolean
  }
  let mySearch:SeachFunc
  mySearch = function(source:string,subString:string) {
      return source.search(subString) !== -1
  }
  ```

- 可选参数

  用`?`表示可选的参数，**可选参数必须接在必需参数的后面**

  ```typescript
  function buildName(firstName: string, lastName?: string) {
      if (lastName) {
          return firstName + ' ' + lastName
      } else {
          return firstName
      }
  }
  let tomcat = buildName('Tom', 'Cat')
  let tom = buildName('Tom')
  ```

- 参数默认值

  ts会将添加了默认值的参数识别为可选参数

  ```typescript
  function buildName(firstName:string,lastName:string = 'Cat') {
      return firstName + lastName
  }
  ```

  此时不受**可选参数必须接在必需参数的后面**的限制了

  ```typescript
  function buildName(firstName:string = 'tom',lastName:string) {
      return firstName + lastName
  }
  ```

- 剩余参数

  es6中可以使用`...rest`的方式获取函数中的剩余参数

  ```typescript
  function push(array:any[],...items:any[]){
      items.forEach(item => {
          array.push(item)
      })
  }
  ```

- 重载

  重载允许一个函数接受不同数量或类型的参数时，作出不同的处理。

  ```typescript
  function reverse(x:number):number
  function reverse(x:string):string
  function reverse(x:number | string):number | string {
      if(type of x === 'number') {
          return Number(x.toString().split('').reverse().join(''))
      }else if(type of x === 'string') {
          return x.split('').reverse.join('')
      }
  }
  ```

  注意：ts会优先从最前面的函数定义开始匹配，所以多个函数定义如果有包含关系，需要优先把精确的定义写在前面

#### 类型断言

类型断言可以用来手动指定一个值的类型

语法：  值 as 类型  或   <类型>值

形如<Foo>在react中表示的是一个`ReactNode`，在ts中除了表示类型断言之外，也可能表示一个范型。故建议  值 as 类型   这种写法

- 类型断言的用途

  - 将一个联合类型断言为其中一个类型

    只能访问此联合类型的所有类型中共有的属性或方法
    ```typescript
    interface Cat {
        name: string
        run(): void
    }
    interface Fish {
        name: string
        swim(): void
    }
    function getName(animal: Cat | Fish) {
        return animal.name
    }
    ```
    而有的时候，我们确实需要在还不确定类型的时候就访问其中一个类型特有的属性或方法，例如

    ```typescript
    function isFish(animal: Cat | Fish) {
        if(typeof animal.swim === 'function') {
            return true
        }
        return false
    }
    // Property 'swim' does not exist on type 'Cat | Fish'.Property 'swim' does not exist on type 'Cat'.
    ```

    上面的例子获取`animal.swim`的时候会报错。

    此时可以使用类型断言，将animal断言成`Fish`。

    ```typescript
    function isFish(animal: Cat | Fish) {
        if(typeof (animal as Fish).swim === 'function') {
            return true
        }
        return false
    }
    //此时类型断言只能够[欺骗]ts编辑器，无法避免运行时的错误，反而滥用类型断言可能会导致运行时错误。
    ```
    
  - 将一个父类断言为更加具体的子类
    
  - 将任何一个类型断言为 `any`
  
  - 将 `any` 断言为一个具体的类型
  
  - 类型断言的限制
  
    ```typescript
    (window as any).foo = 1
  ```
    
  此时我们可以使用`as any`临时将`window`断言为`any`类型
    
  它极有可能掩盖了真正的类型错误，所以如果不是非常确定，就不要使用`as any`。
    
  ```typescript
    interface Animal {
        name: string
    }
    interface Cat extends Animal {
        run(): void
    }
  ```
    
    ```typescript
    interface Animal {
        name: string
    }
    interface Cat {
        name: string
        run(): void
    }
    let tom: Cat = {
        name: 'tom',
        run: () => { console.log('run') }
    }
    let animal: Animal = tom
    ```

总结出：

- 联合类型可以被断言为其中一个类型
- 父类可以被断言为子类
- 任何类型都可以被断言为 `any`
- `any`可以被断言为任何类型

```typescript
interface Animal {
    name: string
}
interface Cat {
    name: string
    run(): void
}
function testAnimal(animal: Animal) {
    return (animal as Cat)
}
function testCat(cat: Cat) {
    return (cat as Animal)
}
```

这种设计容易被理解：

- 允许`animal as Cat`是因为[父类可以被断言为子类]
- 允许`cat as Animal`是因为既然子类拥有父类的属性和方法，那么被断言为父类，获取父类的属性，调用父类的方法，就不会有任何问题，故[子类可以被断言为父类]

##### 双重断言

```typescript
interface Cat {
    run(): void
}
interface Fish {
    swim(): void
}
function testCat(cat: Cat){
    return (cat as any as Fish)
}
//除非迫不得已，千万别用双重断言
```

##### 类型断言VS类型转换

类型断言只会影响TS编译时的类型，类型断言语句在编译结果中会删除

```typescript
function toBoolean(sth: any):boolean {
    return sth as boolean
}
toBoolean(1)
//返回值为 1
```

所以类型断言不是类型转换，它不会真的影响到变量的类型。

若要进行类型转换，需要直接调用类型转换的方法

```typescript
function toBoolean(sth: any):boolean {
    return Boolean(1)
}
toBoolean(1)
//返回值为 true
```



##### 类型断言VS类型声明

##### 类型断言VS范型

#### 声明文件

当使用第三方库时，我们需要引用它的声明文件，才能获得对应的代码补全、接口提示等功能

- `declare var` 声明全局变量
- `declare function` 声明全局方法
- `declare class`声明全局类
- `declare enum` 声明全局枚举类型
- `declare namespace` 声明(含有子属性的)对象
- `interface和 type` 声明全局类型
- `export` 导出变量
- `export namespace` 导出(含有子属性)对象
- `export default` ES6默认导出
- `export =` commonjs 导出模块
- `export as namespace` UMD库声明全局变量
- `declare global` 扩展全局变量
- `declare module` 扩展模块