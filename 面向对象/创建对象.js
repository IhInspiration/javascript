function annotation(name){
    var string = "------------------------------";
    var results, index, arr;
    if(name.length < string.length){
        index = parseInt((string.length - name.length) / 2);
        arr = string.split("");
        if(index % 2 == 1){
            arr.splice(index + 1, name.length, name);
        }else{
            arr.splice(index, name.length, name);
        }
        results = arr.join("");
    }else{
        results = "-" + name + "-";
    }
    console.log(results);
}

annotation("工厂模式");
function createPerson(name, age, job){
    var o = new Object();
    o.name = name;
    o.age = age;
    o.job = job;
    o.sayName = function(){
        console.log(this.name);
    };
    return o;
}
var person1 = createPerson("jackwang", 21, "FE");
var person2 = createPerson("shiyuyanyun", 22, "DEV");
console.log(person1);
console.log(person2);

annotation("构造函数模式");
function Person(name, age, job){
    this.name = name;
    this.age = age;
    this.job = job;
    this.sayName = function(){
        console.log(this.name);
    }
}
var person3 = new Person("jackwang", 21, "FE");
var person4 = new Person("shiyuyanyun", 22, "DEV");
console.log(person3.constructor == Person);
console.log(person3 instanceof Object);
console.log(person3 instanceof Person);
console.log(person3.constructor == Person);
console.log(person4.constructor == Person);
console.log(person4 instanceof Object);
console.log(person4 instanceof Person);

person3.sayName();

// Person("Greg", 27, "Doctor");
// window.sayName();//Greg

var o = new Object();
Person.call(o, "Kristen", 25, "Nurse");
o.sayName();

annotation("不同实例上的同名函数不同");
console.log(person3.sayName == person4.sayName);

//可修改下面这样，避免函数重新生成实例
// function Person(name, age, job){
//     this.name = name;
//     this.age = age;
//     this.job = job;
//     this.sayName = sayName;
// }
// function sayName(){
//     console.log(this.name);
// }

annotation("原型模式");
//此为构造函数模式与原型模式组合使用
function Person1(name, age, job){
    this.name = name;
    this.age = age;
    this.job = job;
}
Person1.prototype.test = "test";
Person1.prototype.sayName = function(){
    console.log(this.name);
};
var person5 = new Person1("jw", 15, "doctor");
person5.sayName();

console.log(Person1.prototype.isPrototypeOf(person1));
console.log(Person1.prototype.isPrototypeOf(person5));

annotation("getPrototypeOf");
console.log(Object.getPrototypeOf(person5) == Person1.prototype);

annotation("hasOwnProperty");
//检测一个属性或方法是位于原型中还是实例中
console.log(person5.hasOwnProperty("name"));
console.log(person5.hasOwnProperty("sayName"));

annotation("in");
//检测是否包含属性或方法，原型实例中只要存在就true
console.log("name" in person5);
console.log("sayName" in person5);

annotation("Object.keys()");
var keys = Object.keys(Person1.prototype);
console.log(keys);
person5.test = "test1";
var p5keys = Object.keys(person5);
console.log(p5keys);

annotation("getOwnPropertyNames");
//获取所有实例属性，无论它是否可枚举
//constructor为不可枚举属性
var keys2 = Object.getOwnPropertyNames(Person1.prototype);
console.log(keys2);

annotation("rewrite prototype");
//constructor被改写，如果需要，按照下面添加,但是会变成了可枚举属性
//如果用defineProperty可以实现
function Person2(){

}
Person2.prototype = {
    // constructor: Person2,
    name: "jack",
    age: 20,
    job: "FE",
    sayName: function(){
        console.log(this.name);
    }
};
var friend = new Person2();
console.log(friend instanceof Object);
console.log(friend instanceof Person2);
console.log(friend.constructor == Person2);
console.log(friend.constructor == Object);

annotation("寄生构造函数模式");
//此模式与工厂模式除了使用new操作符并把函数叫构造函数之外无区别
//此处用个特别的例子来展示
//创建一个具有额外方法的特殊数组
function SpecialArray(){
    var values = new Array();
    values.push.apply(values, arguments);
    values.toPipedString = function(){
        return this.join("|");
    };
    return values;
}
var colors = new SpecialArray("red", "blue", "green");
console.log(colors.toPipedString());