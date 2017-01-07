/**
 * Created by jackwang on 2017/1/7.
 */
var book = {
    "title": "Professional JavaScript",
    "authors": [
        "JackWang"
    ],
    edition: 3,
    year: 2011
};

//如果第二个参数为过滤器
var jsonText = JSON.stringify(book, ["title", "edition"]);
console.log(jsonText);

//如果第二个参数为函数，传入的函数接收两个参数，属性名和属性值
var jsonText1 = JSON.stringify(book, function(key, value){
    switch(key){
        case "authors":
            return value.join(",");
        case "year":
            return 5000;
        case "edition":
            return undefined;
        default:
            return value;
    }
});

console.log(jsonText1);

//第三个参数用于控制结果中的缩进和空白符
var jsonText2 = JSON.stringify(book, null, 4);
console.log(jsonText2);

var jsonText3 = JSON.stringify(book, null, " - -");
console.log(jsonText3);