
// Take a number n as input from user. Create an array of numbers from 1 to n.
//Use the reduce method to calculate sum of all numbers in the array

const input = prompt("Enter any Number 1 to n");
let arr = [];
let start =1;

if (input>0) {
    for(let i=0;i<input;i++){
        arr[i] = ++start;
    }
}

//Reduce the sum

const allSum = arr.reduce((prev,curr)=>{
    return prev+curr;
},0)

//Product Sum
const productSum = arr.reduce((prev,curr)=>{
    return prev*curr;
},1)

console.log('The sum is',allSum);

console.log('The product is',productSum);