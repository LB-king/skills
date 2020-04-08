function sayHello(person) {
    return 'hello,' + person;
}
console.log(sayHello('kobe'));
// 布尔值
var isDnone = false;
// 数值
var number1 = 88;
var number2 = 0xf00d;
var number3 = 10;
var number4 = 484;
var number5 = NaN;
var number6 = Infinity;
//字符串
var myName = 'Tom';
var myAge = 22;
var sentence = "Hello,my name is " + myName + " and I'm " + myAge;
//空值
function getName() {
    alert('name is ok');
}
// null undefined
var u = undefined;
var n = null;
//any
var myFavorite = 'seven';
myFavorite = 7;
//任意的属性值和方法
var anyThing = 'hello';
anyThing.setName('kkk');
anyThing.setName('kkk').sayHello();
anyThing.myName.setName('cat');
//类型推论
var str;
str = 6;
str = 'six';
//联合类型
var str1;
str1 = 'seven';
str1 = 7;
// let str2:string | number
// str2 = true
//访问联合类型的属性和方法
function getLength(sth) {
    return str.length;
}
var tom = {
    name: 'tom',
    age: 23,
    gender: 'male'
};
var pp = {
    id: 123,
    name: 'readonly'
};
pp.name = 'kobe';
var mySum = function (x, y) {
    return x + y;
};
//剩余参数
function push(arr) {
    var items = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        items[_i - 1] = arguments[_i];
    }
    items.forEach(function (item) {
        arr.push(item);
    });
}
var aa = [];
console.log(aa, 1, 2, 3);
function reverse(str) {
    if (typeof str === 'string') {
        return str.split('').reverse().join('');
    }
    else if (typeof str === 'number') {
        return +(str.toString().split('').reverse().join(''));
    }
}
console.log(reverse(1234));
console.log(reverse('hello'));
function getAnimalName(animal) {
    return animal.name;
}
function isFish(animal) {
    // if(typeof animal.swim === 'function') {
    //     return true
    // }
    if (typeof animal.swim === 'function') {
        return true;
    }
    return false;
}
