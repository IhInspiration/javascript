//示例1
function createComparisonFunction(propertyName){
    return function(object1, object2){
        var value1 = object1[propertyName];
        var value2 = object2[propertyName];
        if(value1 < value2){
            return -1;
        }else if(value1 > value2){
            return 1;
        }else{
            return 0;
        }
    }
}

//示例2（对比闭包的影响）
//内部闭包的作用域链上保存着外部函数的活动对象，均引用同一个i
function createFunctions(){
    var result = new Array();
    for(var i = 0; i< 10; i++){
        result[i] = function(){
            return i;
        };
    }
    console.log(result);
    return result;
}
console.log(createFunctions()[5]());

//参数传参是按照值传递的，所以在函数内部的函数内部存在一个i的副本
function createFunctions1(){
    var result = new Array();
    for(var i = 0; i< 10; i++){
        result[i] = function(num){
            return function(){
                return num;
            };
        }(i);
    }
    console.log(result);
    return result;
}
console.log(createFunctions1()[5]());

//示例3
//关于this对象
var name = "The Window";
var object = {
    name: "My 0bject",
    getNameFunc: function(){
        var that = this;
        return function(){
            return this.name;
            // return that.name;
        };
    }
};
console.log(object.getNameFunc()());

//示例4
var singleton = function(){
    //私有变量和私有函数
    var privateVariable = 10;
    function privateFunction(){
        return false;
    }
    //特权/公有方法和属性
    return{
        publicProperty: true,
        publicMethod: function(){
            privateVariable++;
            return privateFunction();
        }
    }
}();
