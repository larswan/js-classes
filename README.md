# JS Classes

## Declaration types

```js
// Declaration: this way is hoisted meaning you can use the class before its declared in the code
class Rectangle {
  constructor(height, width) {
    this.height = height;
    this.width = width;
  }
}

// Expression; the class is anonymous but assigned to a variable. Not hoisted so cant be used until declared. 
const Rectangle = class {
  constructor(height, width) {
    this.height = height;
    this.width = width;
  }
};

// Expression; the class has its own name. Has debugging uses since the classes name can only be accessed within the class
const Rectangle = class Rectangle2 {
  constructor(height, width) {
    this.height = height;
    this.width = width;
  }
  logClassName() {
    // Accessible within the class
    console.log(Rectangle2.name);
  }
};
//Example:
const rectangleInstance = new Rectangle(5, 10);
rectangleInstance.logClassName();
// output: "Rectangle2"
```

### Basic Usage

See src/examples/basicExamples.js

### Subclasses

See src/examples/subClass.js

### Field Declarations

You can declare them outside the constructor so that each instance has them.
-Don't need a default value
-Don't use const etc, don't use private or public

Ex:

```js
class Rectangle {
  height = 0; // default value of 0
  width; // default value undefined
  // normal constructor
  constructor(height, width) {
    this.height = height;
    this.width = width;
  }
}
```

### Private Class Properties

[MDN Webdocs](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Classes/Private_properties)

Properties or methods that can't be accessed from outside the class. Helps maintain the classes internal state since other private fields can't be changed by other code - can only be changed by class functions.

- Prefixed with #
- Private identifiers must be unique
- Types of private properties: Private fields, Private methods, Private static fields, Private static methods, Private getters, Private setters, Private static getters, Private static setters
- Can't be constructors. [To prevent classes from being constructed outside of the class](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Classes/Private_properties#simulating_private_constructors)
-Private fields can only be declared up-front in a field declaration. You can still use setters if defined. They just can't be directly re-assigned outside (eg: myInstance.#count = 5 wouldn't work)

```js
class Counter {
  #count = 0; // Private field

  increment() {
    this.#count++;
  }

  decrement() {
    if (this.#count > 0) {
      this.#count--;
    }
  }

  getCount() {
    return this.#count;
  }
}

const myCounter = new Counter();

// Direct access to the private field is not allowed
console.log(myCounter.#count); // => SyntaxError

// Accessing the count through a public method
console.log(myCounter.getCount()); // Output: 1
```