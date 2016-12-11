var now = new Date();
var someDate = new Date(Date.parse("May 25, 2004"));
var someDate1 = new Date("May 25, 2004");
console.log(someDate, someDate1);

var y2k = new Date(Date.UTC(2000, 0));
var y2k2 = new Date(2000, 0);//基于本地时区模仿Date.UTC，转换为格林威治时间
var allFives = new Date(Date.UTC(2005, 4, 5, 17, 55, 55));
var allFives2 = new Date(2005, 4, 5, 17, 55, 55);//基于本地时区模仿Date.UTC，转换为格林威治时间
console.log(y2k);
console.log(y2k2);
console.log(allFives);
console.log(allFives2);

var start = Date.now();
//兼容 var start = +new Date();
var sum = 0;
for(var i = 0; i < 1000; i++){
    for(var j = 0; j < 100; j++){
        sum  += i * j;
    }
}
var stop = Date.now();
console.log(stop - start);

//Date类型的valueOf()方法，返回日期的毫秒表示
var date1 = new Date(2007, 0, 1);
var date2 = new Date(2007, 1, 1);
console.log(date1.valueOf());
console.log(date1 < date2);

/* 日期格式化方法示例 */
var test = new Date();
console.log(test);
//以特定实现格式显示星期几、月、日和年
console.log(test.toDateString());
//以特定于实现的格式显示时、分、秒、时区
console.log(test.toTimeString());
//以特定于地区的格式显示星期几、月、日和年
console.log(test.toLocaleDateString());
//以特定于实现的格式显示时分秒
console.log(test.toLocaleTimeString());
//以特定于实现的格式完整的UTC时期
console.log(test.toUTCString());

