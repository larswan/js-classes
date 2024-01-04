// Prototype
class Rectangle {
  // Constructor: special method for creating and initializing an object created with a class
  constructor(width, height) {
    // instance properties
    this.height = height;
    this.width = width;
  }

  // Class methods
  calculateArea() {
    return this.height * this.width;
  }

  // Getter: access a calculated value in a way that looks like a property
  get area() {
    return this.calculateArea();
  }

  // Static Method: often used for utility functions
  static combineWidths(a, b) {
    return a.width + b.width;
  }

  // Static fields: useful for caches, fixed-configuration, or any other data that doesn't need to be replicated across instances
  static thisClassName = "Rectangle";
}

// SUBCLASS
class Square extends Rectangle {
  constructor(sideLength) {
    // call the constructor of rectangle superclass
    super(sideLength, sideLength);
  }
}

// INSTANCES
const myRectangle = new Rectangle(4, 5);
const mySquare = new Square(3);

// Calling a static method
console.log(Rectangle.combineWidths(myRectangle, mySquare));

class Counter {
  #count; // Private field

  getCount() {
    return this.#count;
  }

  setCount(newCount) {
    if (newCount >= 0) {
      this.#count = newCount;
    } else {
      console.error("Count must be a non-negative number");
    }
  }
}

const myCounter = new Counter();

// Using the setter to update the count
myCounter.setCount(5);

console.log(myCounter.getCount()); // Output: 5
