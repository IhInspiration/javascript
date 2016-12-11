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
//length获取字符串中字符多少
annotation("length");
var stringValue = "Hello world!";
var stringValue1 = "测试";
console.log(stringValue.length);
console.log(stringValue1.length);

annotation("charAt");
console.log(stringValue.charAt(1));
//字符编码
annotation("charCodeAt");
console.log(stringValue.charCodeAt(1));

console.log(stringValue[1]);

//字符串操作方法
annotation("concat");
var operateTest = "hello ";
var result = operateTest.concat("world");
var result1 = operateTest.concat("world", "!");
console.log(result);
console.log(result1);
console.log(operateTest);

annotation("slice,substring,substr");
var operateTest1 = "hello world";
console.log(operateTest1.slice(3));
console.log(operateTest1.substring(3));
console.log(operateTest1.substr(3));
console.log(operateTest1.slice(3, 7));//第二参数子字符串最后一个字符后面位置
console.log(operateTest1.substring(3, 7));//同上
console.log(operateTest1.substr(3, 7));//第二参数为返回字符个数

annotation("slice,substring,substr 负数");
//slice方法会将负数与字符串长度相加
//substring将所有负数参数转换为0
//substr将第一个负数参数加上字符串长度，第二个负数转换为0
console.log(operateTest1.slice(-3));
console.log(operateTest1.substring(-3));
console.log(operateTest1.substr(-3));
console.log(operateTest1.slice(3, -3));
console.log(operateTest1.substring(3, -4));
console.log(operateTest1.substr(3, -4));

//字符串位置方法
annotation("indexOf, lastIndexOf");
console.log(operateTest1.indexOf("o"));
console.log(operateTest1.lastIndexOf("o"));
//第二参数为从哪个位置开始搜索
console.log(operateTest1.indexOf("o", 6));
console.log(operateTest1.lastIndexOf("o", 6));


//trim方法
annotation("trim");
var trimTest = "  hello world   ";
console.log(trimTest.trim());

//字符串大小写转换方法
annotation("toLowerCase等");
console.log(stringValue.toLocaleUpperCase());
console.log(stringValue.toUpperCase());
console.log(stringValue.toLocaleLowerCase());
console.log(stringValue.toLowerCase());

//字符串模式匹配方法
annotation("match");
var matchText = "cat, bat, sat, fat";
var pattern = /.at/;
var matches = matchText.match(pattern);
console.log(matches.index);
console.log(matches[0]);
console.log(pattern.lastIndex);//记录上次正则匹配位置

annotation("search");
var pos = matchText.search(/at/);
console.log(pos);

annotation("replace");
var resultReplace = matchText.replace("at", "ond");
console.log(resultReplace);
resultReplace = matchText.replace(/at/g, "ond");
console.log(resultReplace);

annotation("特殊字符序列");
resultReplace = matchText.replace(/(.at)/g, "word ($1)");
console.log(resultReplace);

//replace第二个参数可以是一个函数，包含三个参数：模式匹配项
//模式匹配项在字符串中的位置和原始字符串
//如果有捕获组则为模式匹配项、第一捕获组匹配项、第二捕获组匹配项。。。
//然后最后两个参数同上
function htmlEscape(text){
    return text.replace(/[<>"&]/g, function(match, pos, originalText){
        switch(match){
            case "<":
                return "&lt;";
            case ">":
                return "&gt;";
            case "&":
                return "&amp;";
            case "\"":
                return "&quot;";
        }
    });
}
console.log(htmlEscape("<p class=\"greeting\">Hello world!</p>"));

annotation("split");
var colorText = "red, blue, green, yellow";
var colors1 = colorText.split(",");
var colors2 = colorText.split(",", 2);
var colors3 = colorText.split(/[^\,]+/);
console.log(colors1);
console.log(colors2);
console.log(colors3);

//比较两个字符串
annotation("localeCompare");
//如果字符串在字母表中应该排在字符串参数之前，则返回一个负数，等于，返回0
var compareText = "yellow";
console.log(compareText.localeCompare("brick")); //1
console.log(compareText.localeCompare("yellow"));
console.log(compareText.localeCompare("zoo"));

//String构造函数静态方法fromCharCode
annotation("fromCharCode");
//接收一或多个字符编码，将他转成字符串
console.log(String.fromCharCode(104, 101, 108, 108, 111));