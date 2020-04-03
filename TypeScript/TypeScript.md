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

解决方案：在项目根目录新建一个tsconfig.ts,即使是空的也可以避免这个警告

TypeScript中，使用`:`指定变量的类型，`:`的前后有没有空格都可以。

上述例子中，我们用`:`指定`person`参数类型为`string`。但是编译为js之后，并没有检查的代码被插入进来。

**ts只会进行静态检查，如果发现错误，编译的时候就会报错。**

**即使报错，还是会生成编译结果**

在报错的时候如果要终止js文件的生成，可以在tsconfig.json中配置`noEmitOnError`即可

### 基础

#### 原始数据类型

js数据类型分为2种：原始数据类型(primitive data types)和对象类型(object types)

原始数据类型包括：布尔值、数值、字符串、null、undefined、以及es6里的symbol

#### 布尔值

使用`boolean`定义布尔值

```typescript
let isDnone:boolean = false
```

```javascript
var isDnone = false;
```



new Boolean()返回的是一个Boolean对象

直接Boolean(1)返回一个boolean类型

#### 数值

使用`number`定义数值类型

```typescript
let decLiteral: number = 6
```

es6中的二进制和八进制会被编译成十进制数字。

#### 字符串

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

#### 空值

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

#### Null和Undefined

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

#### 任意值

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

