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

//encodeURI不会对本身属于URI的特殊字符进行编码，例如冒号、正斜杠、问号和井号
//encodeURIComponent对它发现的任何非标准字符进行编码
var uri = "http://www.wrox.com/illegal value.htm#start";
console.log(encodeURI(uri));
console.log(encodeURIComponent(uri));
var uri1 = "http%3A%2F%2Fwww.wrox.com%2Fillegal%20value.htm%23start";
console.log(decodeURI(uri1));
console.log(decodeURIComponent(uri1));

annotation("max, min");
var max = Math.max(3, 54, 32, 16);
console.log(max);
var min = Math.min(3, 54, 32, 16);
console.log(min);
var values = [1, 2, 3,4, 5, 6, 7, 8];
max = Math.max.apply(null, values);
console.log(max);

annotation("ceil, floor, round");
//向上舍入
console.log(Math.ceil(25.9));
console.log(Math.ceil(25.5));
console.log(Math.ceil(25.1));
//向下舍入
console.log(Math.floor(25.9));
console.log(Math.floor(25.5));
console.log(Math.floor(25.1));
//四舍五入
console.log(Math.round(25.9));
console.log(Math.round(25.5));
console.log(Math.round(25.1));

annotation("random");
var num1 = Math.floor(Math.random() * 10 + 1);
var num2 = Math.floor(Math.random() * 9 + 2);
console.log(num1);
console.log(num2);

