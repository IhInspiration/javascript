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

//示例1
annotation("example1");
function SuperType(){
    this.property = true;
}
SuperType.prototype.getSuperValue = function(){
    return this.property;
};
function SubType(){
    this.subproperty = false;
}
SubType.prototype = new SuperType();
SubType.prototype.getSubValue = function(){
    return this.subProperty;
};
var instance = new SubType();
console.log(instance .getSuperValue());
console.log(instance.constructor);

console.log(instance instanceof Object);
console.log(instance instanceof SuperType);
console.log(instance instanceof SubType);

console.log(Object.prototype.isPrototypeOf(instance));
console.log(SuperType.prototype.isPrototypeOf(instance));
console.log(SubType.prototype.isPrototypeOf(instance));

//示例2
//引用类型值得原型属性会被所有实例共享
annotation("example2");
function SuperType2(){
    this.colors = ["red", "blue", "green"];
}
function SubType2(){

}
SubType2.prototype = new SuperType2();

var instance2 = new SubType2();
instance2.colors.push("black");
console.log(instance2.colors);

var instance21 = new SubType2();
console.log(instance21.colors);

//示例3（构造函数）
//这样就会使SubType3拥有SuperType3的所有属性副本
//缺点：函数无法复用，超类型原型中定义的方法，对子类型不可见
annotation("example3");
function SuperType3(name){
    this.name = name;
    this.colors = ["red", "blue", "green"];
}
function SubType3(){
    SuperType3.call(this, "jackwang");//优点：可以传递参数
    this.age = 29;
}
var instance3 = new SubType3();
instance3.colors.push("black");
console.log(instance3.colors);
console.log(instance3.name);
console.log(instance3.age);

var instance31 = new SubType3();
console.log(instance31.colors);

//示例4（组合继承）
//既可以让两个不同的SubType示例分别拥有自己的属性
//包括colors属性,有可以使用相同的方法了
annotation("example4");
function SuperType4(name){
    this.name = name;
    this.colors = ["red", "blue", "green"];
}
SuperType4.prototype.sayName = function(){
    console.log(this.name);
};

function SubType4(name, age){
    SuperType4.call(this, name);
    this.age = age;
}
SubType4.prototype = new SuperType4();
SubType4.prototype.constructor = SubType4;
SubType4.prototype.sayAge = function(){
    console.log(this.age);
};

var instance4 = new SubType4("jackwang", 21);
instance4.colors.push("black");
instance4.sayName();
instance4.sayAge();

var instance41 = new SubType4("zh", 22);
console.log(instance41.colors);
instance41.sayName();
instance41.sayAge();

//示例5（原型式继承）
annotation("example5");
function object(o){
    function F(){}
    F.prototype = o;
    return new F();
}
var person = {
    name: "jackwang",
    friends: ["zh", "zc", "lwb"]
};
var anotherPerson = object(person);
anotherPerson.name = "zry";
anotherPerson.friends.push("zqb");

var yetAnotherPerson = object(person);
yetAnotherPerson.name = "Linda";
yetAnotherPerson.friends.push("zp");

console.log(person.friends);

annotation("example5-2");
//Object.create含有两个参数
//一个用作新对象原型的对象和【可选的】一个为新对象定义的额外属性对象
var person2 = {
    name: "jackwang",
    friends: ["zh", "zc", "lwb"]
};
var anotherPerson2 = Object.create(person2);
anotherPerson2.name = "zry";
anotherPerson2.friends.push("zqb");

var yetAnotherPerson2 = Object.create(person2, {
    name: {
        value: "zyf"
    }
});
yetAnotherPerson2.name = "Linda";
yetAnotherPerson2.friends.push("zp");

console.log(person2.friends);
console.log(yetAnotherPerson2.name);

//示例6（寄生式继承）
annotation("example6");
function createAnother(original){
    var clone = object(original);//通过调用函数创建一个新对象
    clone.sayHi = function(){    //以某种方式来增强这个对象
        console.log("hi");
    };
    return clone;                //返回这个对象
}
var person6 = {
    name: "jacwkang",
    friends: ["a", "b", "c"]
};
var anotherPerson6 = createAnother(person);
anotherPerson6.sayHi();

//示例7（寄生组合式继承）
annotation("example7");
//不必为了指定子类型的原型而调用超类型的构造函数
//我们所需要的无非就是一个超类型原型的副本而已

//子原型指向超原型
function inheritPrototype(subType, superType){
    var prototype = object(superType.prototype);  //创建对象
    prototype.constructor = subType;              //增强对象
    subType.prototype = prototype;                //指定对象
}

function SuperType7(name){
    this.name = name;
    this.colors = ["red", "blue", "green"];
}
SuperType7.prototype.sayName = function(){
    console.log(this.name);
};

function SubType7(name, age){
    SuperType7.call(this, name);
    this.age = age;
}

inheritPrototype(SubType7, SuperType7);

SubType7.prototype.sayAge = function(){
    console.log(this.age);
};

var instance7 = new SubType7("jackwang", 21);
instance7.colors.push("black");
instance7.sayName();
instance7.sayAge();

var instance71 = new SubType4("zh", 22);
console.log(instance71.colors);
instance71.sayName();
instance71.sayAge();