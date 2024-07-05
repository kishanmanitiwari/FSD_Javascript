
class Person{
   
    constructor(name,age,adrress,gender){
        this.name = name;
        this.age = age;
        this.address = adrress;
        this.gender = gender;
    }


    walk() {
        console.log('I am walking');
    }

    talk(){
        console.log('I am talking');
    }

    eat(){
        console.log('I am eating');
    }

}

Person.prototype.greet = function() {
    console.log('Hello, Good Morning');
  };

//Create object of class

// let sana = new Person();
// let sakshi = new Person();
// let hassan = new Person();
// let nikita = new Person();


// // nikita.walk();
// // hassan.talk();
// // sakshi.eat();

// sana.age = 22;
// sana.name = 'sana';
// sana.address ='Pune';

// console.log(sana.age);


//Creating Object by Constructor

let sana = new Person('sana',22,'Pune','Female');
let mohini = new Person('Mohini',22,'Nagpur','Female');
let girish = new Person('Girish',23,'Nashik','Male');

console.log(sana.name);

sana.talk();
sana.walk();