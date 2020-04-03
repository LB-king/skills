function sayHello(person:string){
    return 'hello,' + person
}
console.log(sayHello('kobe'))
// 布尔值
let isDnone:boolean = false
// 数值
let number1: number = 88
let number2: number = 0xf00d
let number3: number = 0b1010
let number4: number = 0o744
let number5: number = NaN
let number6: number = Infinity
//字符串
let myName: string = 'Tom'
let myAge: number = 22
let sentence: string = `Hello,my name is ${myName} and I'm ${myAge}`
//空值
function getName():void {
    alert('name is ok')
}
// null undefined
let u:undefined = undefined
let n:null = null
//any
let myFavorite: any = 'seven'
myFavorite = 7
//任意的属性值和方法
let anyThing:any = 'hello'
anyThing.setName('kkk')
anyThing.setName('kkk').sayHello()
anyThing.myName.setName('cat')
//类型推论
let str
str = 6
str = 'six'
//联合类型
let str1:string | number
str1 = 'seven'
str1 = 7
// let str2:string | number
// str2 = true
//访问联合类型的属性和方法
function getLength(sth: string|number):number{
    return str.length
}

//对象类型
interface Person {
    name: string
    age: number
}
let tom:Person = {
    name:'tom',
    age: 23
}