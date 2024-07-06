//Parent
class Person{

    constructor(){
        this.species = 'homo sapiens';
    }

    eat(){
        console.log('I am eating');
    }
}

//Child
class Enginner extends Person{
    constructor(){
        super();
        this.year = 2024;
    }

    work(){
        super.eat();
        console.log('Start Coding!');
    }

}


let prathamesh = new Enginner();
prathamesh.work();

