/**
 * Created by jackwang on 2016/12/5.
 */
//如果第一个参数应该位于第二个之前返回一个负数，如果两个参数相等则返回0，如果第一参数应该位于第二个之后则返回正数
function compare(value1, value2){
    if(value1 < value2){
        return -1;
    }else if(value1 > value2){
        return 1;
    }else{
        return 0;
    }
}

var values = [0, 1, 10, 5, 15];
values.sort(compare);
console.log(values);

//数组迭代方法：every
//如果数组中每一项均满足条件，则返回true
var  numbers1 = [1, 2, 3, 4, 5, 4, 3, 2, 1];
var everyResult = numbers1.every(function(item, index, array){
    return (item > 2);
});
console.log(everyResult);

//数组迭代方法：some
//如果数组中有任一项满足条件，则返回true
var someResult = numbers1.some(function(item, index, array){
    return (item > 2);
});
console.log(someResult);

//数组迭代方法：filter
//返回数组中满足条件的数组
var filterResult = numbers1.filter(function(item, index, array){
    return (item > 2);
});
console.log(filterResult);

//数组迭代方法：map
//返回每一项运行传入函数的结果数组
var mapResult = numbers1.map(function(item, index, array){
    return item * 2;
});
console.log(mapResult);

//数组迭代方法：forEach
//对数组中每一项运行传入函数，该方法没有返回值
numbers1.forEach(function(item, index, array){
    //执行某些操作
});

//数组归并方法：reduce
//从第一个开始遍历数组，然后构建一个最终返回的值。
var values1 = [1, 2, 3, 4, 5];
var sum = values1.reduce(function(prev, cur, index, array){
   return prev + cur;
});
console.log(sum);

//数组归并方法：reduceRight
//从最后一个开始遍历数组，然后构建一个最终返回的值。
var sum2 = values1.reduceRight(function(prev, cur, index, array){
   return prev + cur;
});
console.log(sum2);

