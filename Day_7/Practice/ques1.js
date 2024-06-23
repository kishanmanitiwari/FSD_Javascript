
const array = [85, 97, 44, 37, 76, 61];

let sum = 0,n=array.length;


for (const element of array) {
    sum+=element;
}

let average = (sum/n);

console.log(average);