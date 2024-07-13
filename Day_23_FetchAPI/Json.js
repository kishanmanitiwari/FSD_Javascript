//Make a js object

const myObject = {
    name:"girish",
    joke:"I fell down"
}

console.log(myObject);

console.log("Before Stringify",typeof myObject);

const myJson = JSON.stringify(myObject) //Js - JSON 

console.log(myJson);

console.log("After Stringify",typeof myJson);

const jsonToObject = JSON.parse(myJson); //Json - Js Object
console.log(jsonToObject);
console.log("After parsing",typeof jsonToObject);

console.log(jsonToObject.name);