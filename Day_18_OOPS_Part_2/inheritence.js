class Parent{


    hello(){
        console.log("Hello From Parent");
    }

    care(){
        console.log('Parent is caring');
    }
}


class Child extends Parent{
    hello(){
        console.log('Hello from Child');
    } //Method Overiding
}

let obj = new Child();
obj.hello();
