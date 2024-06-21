//String Create

let str = 'Ram';

console.log(str);

console.log(typeof str);

//length
console.log(str.length);//3

//inexing

console.log(str[0]);

//String methods

console.log(str.toUpperCase());

console.log('The lowercase is',str.toLowerCase());

str = " Rohan Dance "
str = str.trim()

console.log('The trim is',str);

str = "Rohan"; //Mohan
//r-0, o -1 , h -2, a-3,n-4

console.log(str.slice(1));

let str2 = "Dixit";
 
//let fullName = str+" "+str2;

const fullName = str.concat(str2);

console.log('Full name is',fullName);

//Acess - change

//str[0]='M';//1st way- immutable

str = str.replace('R','M');

console.log(str);

console.log(str.charAt(1)); // str[1];

//String Literal

let age = 14;
let cgpa = 9.25;
myName = 'Devansh';

//

//console.log('My name is',myName,"My age is",10+4," My cgpa is",cgpa);

console.log(`My name is ${myName}, My age is ${++age}, My cgpa is ${cgpa}`);

let friend = `Akshay`; //String