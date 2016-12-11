var num = 10;
console.log(num.toString());
console.log(num.toString(2));
console.log(num.toString(8));
console.log(num.toString(10));
console.log(num.toString(16));

console.log(num.toFixed(2));

//toFixed小数点四舍五入，传入小数位数
console.log("---------toFixed----------");
var num1 = 10.005;
var num11 = -9.99;
console.log(num1.toFixed(2));
console.log(num1.toFixed(1));
console.log(num11.toFixed(1));

//toExponential返回科学计数法，传入小数位数
console.log("-------toExponential------");
var num2 = 100000000000;
console.log(num2.toExponential(2));

//toPrecision返回合适的格式,参数为数值所有数字位数
console.log("-------toPrecision--------");
console.log(num.toPrecision(1));
console.log(num.toPrecision(2));
console.log(num.toPrecision(3));

