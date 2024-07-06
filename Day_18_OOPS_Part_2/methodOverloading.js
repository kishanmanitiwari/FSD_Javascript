
function greet() {
    if (arguments.length == 0) {
        console.log('Good Morning');
    } else {
        console.log(`Hello ${arguments[0]}`);
    }
}

greet(); //0 argument 
greet('girish'); //Method Overloading