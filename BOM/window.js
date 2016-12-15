//定义全局变量与window对象上直接定义属性的区别
//IE9以下报错
var age = 29;
window.color = "red";

console.log(delete window.age);

console.log(delete window.color);

console.log(window.age);
console.log(window.color);

//窗口位置
//IE中保存的是从屏幕左边和上边到window对象表示的页面可见区域的距离
var leftPos = (typeof window.screenLeft == "number") ? window.screenLeft : window.screenX;
var topPos = (typeof window.screenTop == "number") ? window.screenTop : window.screenY;
console.log(leftPos, topPos);

//页面视口大小
var pageWidth = window.innerWidth,
    pageHeight = window.innerHeight;
if(typeof pageWidth != "number"){
    //是否为标准模式
    if(document.compatMode == "CSS1Compat"){
        pageWidth = document.documentElement.clientWidth;
        pageHeight = document.documentElement.clientHeight;
    }else{
        pageWidth = document.body.clientWidth;
        pageHeight = document.body.clientHeight;
    }
}
console.log(pageWidth, pageHeight);

var baiduWin = window.open("http://www.baidu.com/", "topFrame");
window.open("http://www.baidu.com/", "baiduWindow", "height=400,width=400,top=10,left=10");
baiduWin.close();
alert(baiduWin.closed);
alert(baiduWin.opener == window);

//检测弹出窗口是否被屏蔽
var blocked = false;
try{
    var testWin = window.open("http://www.sina.com", "_blank");
    if(testWin == null){
        blocked = true;
    }
}catch(ex){
    blocked = true;
}

if(blocked){
    console.log("The popup was blocked!");
}

// window.print();

window.find();