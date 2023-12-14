class Animal {
    constructor(name) {
        this.name = name;
    }
    makeSound() {
        console.log("Generic animal sound");
    }
}

class Dog extends Animal {
    constructor(name, breed) {
        // Call the constructor of the superclass (Animal)
        super(name);
        this.breed = breed;
    }
    // overwrites superclass function
    makeSound() {
        console.log("Woof! Woof!");
    }
    // extra method
    fetch() {
        console.log("Fetching the ball!");
    }
}

// Create an instance of Dog
const myDog = new Dog("Buddy", "Golden Retriever");

// Access properties and methods
console.log(myDog.name);  // Output: Buddy
console.log(myDog.breed); // Output: Golden Retriever
myDog.makeSound();        // Output: Woof! Woof!
myDog.fetch();            // Output: Fetching the ball!