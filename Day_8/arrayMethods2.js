
//Concat

// let fruits =['Apple','Orange'];

// let vegetable =['Tomato','Potato','Spinach'];

// let combinedArray = vegetable.concat(fruits);

// console.log(combinedArray);

//Unshift and Shift

let students = ['Girish','Mohini','Nikita'];

students.unshift('Prashant');
students.unshift('Rahul');

//Shift Method

let shiftedName = students.shift();
shiftedName = students.shift();
shiftedName = students.shift();
shiftedName = students.shift();
shiftedName = students.shift();

students.push('Rohini');

console.log(students);
console.log('The shifted name is',shiftedName);