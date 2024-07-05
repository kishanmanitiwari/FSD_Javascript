class Animal {
    
    constructor(species) {
      this.species = species;
    }
  }
  
  // Define a method on the Animal.prototype
  Animal.prototype.introduce = function() {
    console.log(`I am a ${this.species}.`);
  };
  
  // Create an instance of the Animal class
  const dog = new Animal("Dog");
  
 