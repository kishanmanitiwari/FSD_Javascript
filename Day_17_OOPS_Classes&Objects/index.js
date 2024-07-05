
//Object

const Rahul = {
    //Properties
    name:'Rahul',
    age:22,
    address:'Pune',
    contact:+9112345,
    gender:'Male',

    //Methdd

    walk:function () {
        console.log('I am walking');
    },

    talk:()=>{
        console.log('I am talking');
    },

    eat(){
        console.log('I am eating');
    }

}

Rahul.Prototype.greet = function() {
    console.log('Hello, Good Morning');
  };

//Dot operator

// console.log(Rahul.name);
// console.log(Rahul.age);
// console.log(Rahul.contact);

// Rahul.talk();


//Array/Bracket/Square Operator

console.log(Rahul['name']);
console.log(Rahul['age']);
console.log(Rahul['contact']);


Rahul['walk']();
Rahul['eat']();