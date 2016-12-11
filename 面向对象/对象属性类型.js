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

annotation("defineProperty");
var person = {};
Object.defineProperty(person, "name", {
    writable: false,
    value: "jackwang"
});
console.log(person.name);
person.name = "qunar";
console.log(person.name);

//一旦设置为不可配置，就不能再把它变成可配置的了
Object.defineProperty(person, "another", {
    configurable: false,
    value: "jackwang1"
});
console.log(person.another);
delete person.another;
console.log(person.another);

//访问器属性
annotation("[[Get]] [[Set]]");
var book = {
    _year: 2004,
    edition: 1
};
Object.defineProperty(book, "year", {
    get: function(){
        return this._year
    },
    set: function(newValue){
        if(newValue > 2004){
            this._year = newValue;
            this.edition += newValue - 2004;
        }
    }
});
book.year = 2005;
console.log(book.edition);

annotation("defineProperties");
var book1 = {};
Object.defineProperties(book1, {
    _year: {
        value: 2004
    },
    edition: {
        value: 1
    },
    year: {
        get: function(){
            return this._year;
        },
        set: function(newValue){
            if(newValue > 2004){
                this._year = newValue;
                this.edition += newValue - 2004;
            }
        }
    }
});
book1.year = 2005;
console.log(book1.edition);

annotation("getOwnPropertyDescriptor");
var descriptor = Object.getOwnPropertyDescriptor(book, "_year");
console.log(descriptor.value);
console.log(descriptor.configurable);
console.log(descriptor.enumerable);
console.log(typeof descriptor.get);

var descriptor1 = Object.getOwnPropertyDescriptor(book, "year");
console.log(descriptor1.value);
console.log(descriptor1.enumerable);
console.log(typeof descriptor1.get);