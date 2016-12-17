//DOM扩展
//检查调用元素与选择符是否匹配，http://caniuse.com/#feat=matchesselector
console.log(document.body.matches("body"));

//遍历某元素的所有子元素
var element = document.getElementsByTagName("ul")[0];
var i,
    len,
    child = element.firstChild;
while(child  != element.lastChild){
    if(child.nodeType == 1){
        console.log(child.innerText);
    }
    child = child.nextSibling;
}

//方法2,使用Element Traversal新增的元素
//childElementCount：返回元素个数
//firstElementChild:指向第一个子元素，firstChild的元素版
//lastElementChild，previousElementSibling,nextElementSibling同上
var firstChild = element.firstElementChild;
for(var j = 0, len1 = element.childElementCount; j < len1; j++){
    console.log(firstChild.innerText);
    firstChild = firstChild.nextElementSibling;
}

//getElementsByClassName
console.log(document.getElementsByClassName("even"));

//增删改查元素类
//classList可以迭代每个元素
//支持情况: http://caniuse.com/#search=classList
document.getElementById("myUl").classList.add("current");
console.log(document.getElementById("myUl").classList.contains("current"));
document.getElementById("myUl").classList.remove("current");
document.getElementById("myUl").classList.toggle("current");//存在删除，不存在添加

//activeElement：引用当前DOM中获取了焦点的元素
//hasFocus：判断文档是否获取了焦点

//document.readyState，如果值为loading表示正在加载文档，complete已经加载完文档
//document.compatMode, 标准模式：CSS1Compat，混杂模式：BackCompat
//document.head获取<head>元素
console.log(document.readyState);
console.log(document.compatMode);
console.log(document.head);

//获取字符集
console.log(document.charset);
document.charset = "UTF-8";

//测试dataset属性
console.log(document.getElementById("myUl").firstElementChild.dataset.num);
document.getElementById("myUl").firstElementChild.dataset.num = "one";

//innerHTML,outerHTML
//1）innerHTML:从对象的起始位置到终止位置的全部内容,不包括Html标签。
//2）outerHTML:除了包含innerHTML的全部内容外, 还包含对象标签本身
document.getElementById("myUl").firstElementChild.getElementsByTagName("table")[0].innerHTML = "<tr><td>1</td></tr>";
console.log(document.getElementById("myUl").firstElementChild.outerHTML);

//insertAdjacentHTML
element = element.firstElementChild.nextElementSibling;
element.insertAdjacentHTML("beforebegin", "<li>beforebegin</li>");//作为前一个同辈元素插入
element.insertAdjacentHTML("afterbegin", "<p>afterbegin</p>");//作为第一个子元素插入
element.insertAdjacentHTML("beforeend", "<p>beforeend</p>");//作为最后一个子元素插入
element.insertAdjacentHTML("afterend", "<li>afterend</li>");//作为后一个同辈元素插入

//scrollIntoView
//chrome不支持
//true或者不传参数，窗口滚动后会让元素顶部与视口顶部尽可能对齐
//false调用元素尽可能全部出现在视口中
document.getElementsByTagName("b")[0].scrollIntoView(true);

//contains方法：判断某个节点是不是另一个节点的后代
//compareDocumentPosition确定节点间关系（1无关2居前4居后8包含16被包含）
var result = console.log(document.documentElement.compareDocumentPosition(document.body));
console.log(!!(result & 16));

//innerText，outerText
// document.getElementById("myDiv").innerText = "<span>test</span>";
document.getElementById("myDiv").innerText = document.getElementById("myDiv").innerText;//可以对元素中html进行过滤