//查询字符串参数
function getQueryStringArgs(){
    //取得查询字符串并去掉开头的问号
    var qs = (location.search.length > 0 ? location.search.substring(1) : ""),
    //保存数据的对象
        args = {},
        //保存每一项
        items = qs.length ? qs.split("&") : [],
        item = null,
        name = null,
        value = null,
        i = 0,
        len = items.length;
    for(i = 0; i < len; i++){
        item = items[i].split("=");
        name = decodeURIComponent(item[0]);
        value = decodeURIComponent(item[1]);
        if(name.length){
            args[name] = value;
        }
    }
    return args;
}
// location.search = "?q=javascript&num=10";
var args = getQueryStringArgs();
console.log(args["q"]);
console.log(args["num"]);

//下面三个操作结果相同，可以立即打开新URL并在浏览器的历史记录中生成一条记录
//location.assign("http://www.jmblog.me");
//window.location = "http://www.jmblog.me";
//location.href = "http://www.jmblog.me";（常用）
//location.hash = "#section";(页面不会重新加载)
//location.search
//location.hostname
//location.pathname
//location.port

setTimeout(function(){
    //后退按钮被禁用，不会再历史记录中生成新纪录
    location.replace("http://www.jmblog.me");
}, 1000);

//location.reload();//如果强制刷新，传入参数true