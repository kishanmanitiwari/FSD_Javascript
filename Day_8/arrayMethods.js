//Create Array

let fruits = ['Apple','Banana','Orange'];

console.log('Before Pushing',fruits);

//PUSH METHOD

fruits.push('grapes');

console.log('After Pushing',fruits);


//POP

let removedFruit = fruits.pop()

// console.log('After Pop',fruits);//A,B,O

fruits.pop();

console.log('After Pop',fruits);//A,B

//Type

console.log(typeof fruits);

//toString

let stringFruit = fruits.toString();

console.log('The Stringify Array is',stringFruit);


console.log(typeof stringFruit);