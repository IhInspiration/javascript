/**
 * Created by jackwang on 2016/12/30.
 */
/* DOM3级 支持不良好 */
// var div = document.createElement("div");
// div.setUserData("name", "Nicholas", function(operation, key, value, src, dest){
//     if(operation == 1){
//         dest.setUserData(key, value, function(){});
//     }
// });
//
// var newDiv = div.cloneNode(true);
// console.log(newDiv.getUserData("name"));

/* 样式 */
//确定浏览器是否支持DOM2级定义的CSS能力
var supportsDOM2CSS = document.implementation.hasFeature("CSS", "2.0");
var supportsDOM2CSS2 = document.implementation.hasFeature("CSS2", "2.0");
console.log(supportsDOM2CSS, supportsDOM2CSS2);

//设置DOM元素样式
// var myDiv = document.getElementById("myDiv");
// myDiv.style.backgroundColor = "red";
//
// myDiv.style.width = "100px";
// myDiv.style.height = "200px";
//
// myDiv.style.border = "1px solid black";
//
// //获取style特性中的样式信息
// console.log(myDiv.style.backgroundColor);
// console.log(myDiv.style.width);
// console.log(myDiv.style.height);

//输出CSS属性值和输出值的类型
// var prop, value, i, len;
// for(i = 0, len = myDiv.style.length; i < len; i++){
//     prop = myDiv.style[i];
//     console.log(prop);
//     value = myDiv.style.getPropertyCSSValue(prop);
//     console.log(prop + " : " + value.cssText + " (" + value.cssValueType + ") ");
// }

//测试getComputedStyle
// var myDiv = document.getElementById("myDiv");
// var computedStyle = document.defaultView.getComputedStyle(myDiv, null);
//
// console.log(computedStyle.backgroundColor);
// console.log(computedStyle.width);
// console.log(computedStyle.height);
// console.log(computedStyle.border);

//确定浏览器是否支持DOM2级样式表
console.log(document.implementation.hasFeature("StyleSheets", "2.0"));

//获取styleSheets集合的两种方法
var sheet = null;
for(var i = 0, len = document.styleSheets.length; i < len; i++){
    sheet = document.styleSheets[i];
    console.log(sheet.href);
}

function getStyleSheet(element){
    return element.sheet || element.styleSheet; //后者专为<=IE8
}
var link = document.getElementsByTagName("link")[0];
var sheet1 = getStyleSheet(link);
console.log(sheet1);

var sheet2 = document.styleSheets[0];
var rules = sheet2.cssRules || sheet2.rules;
var rule = rules[0];
console.log(rule.selectorText);
console.log(rule.cssText);
console.log(rule.style.cssText);
console.log(rule.style.backgroundColor);

//向样式表中插入规则
function insertRule(sheet, selectorText, cssText, position){
    if(sheet.insertRule){
        sheet.insertRule(selectorText + "{" + cssText + "}", position);
    }else if(sheet.addRule){
        sheet.addRule(selectorText, cssText, position);
    }
}
insertRule(document.styleSheets[0], "body", "background-color: silver", 0);

//删除样式规则
//sheet: 要操作的样式表
//index: 要删除规则的位置
function deleteRule(sheet, index){
    if(sheet.deleteRule){
        sheet.deleteRule(index);
    }else if(sheet.removeRule){
        sheet.removeRule(index);
    }
}
deleteRule(document.styleSheets[0], 0);