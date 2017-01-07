/**
 * Created by jackwang on 2017/1/7.
 */
var book = {
    "title": "Professional JavaScript",
    "authors": [
        "JackWang"
    ],
    edition: 3,
    year: 2011,
    releaseDate: new Date(2012, 11, 1)
};

var jsonText = JSON.stringify(book);

console.log(jsonText);

var bookCopy = JSON.parse(jsonText, function(key, value){
    if(key == "releaseDate"){
        return new Date(value);
    }else{
        return value;
    }
});

console.log(bookCopy.releaseDate.getFullYear());

