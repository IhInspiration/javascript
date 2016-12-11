var pattern1 = /\[bc\]at/i;
console.log("global:" + pattern1.global);//是否设置了g标志
console.log("ignoreCase:" + pattern1.ignoreCase);//是否设置了i标志
console.log("multiline:" + pattern1.multiline);//是否设置了m标志
console.log("lastIndex:" + pattern1.lastIndex);//表示开始搜索下一个匹配项的字符位置
console.log("source:" + pattern1.source);//正则表达式的字符串形式

//exec方法
var text = "mom and dad and baby";
var pattern = /mom( and dad( and baby)?)?/gi;

var matches = pattern.exec(text);
console.log(matches.index);
console.log(matches.input);
console.log(matches[0]);
console.log(matches[1]);
console.log(matches[2]);

//是否设置g的区别
var text1 = "cat, bat, sat, fat";
var pattern2 = /.at/;
var matches1 = pattern2.exec(text1);
console.log(matches1.index);
console.log(matches1[0]);
console.log(pattern2.lastIndex);
matches1 = pattern2.exec(text1);
console.log(matches1.index);
console.log(matches1[0]);
console.log(pattern2.lastIndex);

var pattern3 = /.at/g;
var matches2 = pattern3.exec(text1);
console.log(matches2.index);
console.log(matches2[0]);
console.log(pattern3.lastIndex);
matches2 = pattern3.exec(text1);
console.log(matches2.index);
console.log(matches2[0]);
console.log(pattern3.lastIndex);

//test方法
//模式匹配返回true否则返回false
var test = "000-00-0000";
var patternTest = /\d{3}-\d{2}-\d{4}/;
if(patternTest.test(test)){
    console.log("The pattern was matched.");
}