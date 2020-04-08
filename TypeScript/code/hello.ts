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
    age?: number
    [propName:string] :any
}
let tom:Person = {
    name:'tom',
    age: 23,
    gender: 'male'
}

interface Pe{
    readonly id:number
    name:string
}
let pp:Pe = {
    id:123,
    name:'readonly'
}
pp.name = 'kobe'

let mySum:(x:number,y:number) => number = function(x:number,y:number):number{
    return x + y
}

//剩余参数
function push(arr:any[], ...items:any[]){
    items.forEach(item => {
        arr.push(item)
    })
}
let aa:number[] = []
console.log(aa,1,2,3)

//重载
function reverse(str:string):string
function reverse(str:number):number
function reverse(str:number | string):number|string {
    if(typeof str === 'string'){
        return str.split('').reverse().join('')
    }else if(typeof str === 'number'){
        return +(str.toString().split('').reverse().join(''))
    }
}
console.log(reverse(1234))
console.log(reverse('hello'))

interface Cat {
    name: string
    run(): void
}
interface Fish {
    name: string
    swim(): void
}
function getAnimalName(animal: Cat | Fish) {
    return animal.name
}

function isFish(animal: Cat | Fish) {
    // if(typeof animal.swim === 'function') {
    //     return true
    // }
    if(typeof (animal as Fish).swim === 'function') {
        return true
    }
    return false
}