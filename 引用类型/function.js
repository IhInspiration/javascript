function factorial(num){
    if(num <= 1){
        return 1;
    }else{
        return num * arguments.callee(num - 1);
    }
}

var trueFactorial = factorial;
factorial = function(){
    return 0;
};
console.log(trueFactorial(5));
console.log(factorial(5));

//浏览器打开，网页的全局作用域中调用函数时，this指向window
// window.color = "red";
// var o = {color: "blue"};
// function sayColor(){
//     console.log(this.color);
// }
// sayColor();
// o.sayColor = sayColor;
// o.sayColor();

//caller属性中保存着调用当前函数的的函数的引用
//arguments.callee严格模式会报错
function outer(){
    inner();
}
function inner(){
    console.log(arguments.callee.caller);
}
outer();

//apply方法
function sum(num1, num2){
    return num1 + num2;
}
function callSum1(num1, num2){
    return sum.apply(this, arguments);
}
function callSum2(num1, num2){
    return sum.apply(this, [num1, num2]);
}
function callSum3(num1, num2){
    return sum.call(this, num1, num2);
}
console.log(callSum1(10, 10));
console.log(callSum2(10, 10));
console.log(callSum3(10, 1));

