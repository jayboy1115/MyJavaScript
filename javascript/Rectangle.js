class Rectangle extends Shape {
    constructor(width, height, name = "Rectangle") {
      super(name);
      this.width = width;
      this.height = height;
    }
  
    area() {
      return this.width * this.height;
    }
  
    isSquarish() {
      return this.width == this.height;
    }
  }

const wall = new Rectangle(10, 20);
console.log(`Shape: ${wall.name}`);
console.log(`Area: ${wall.area()}`);
console.log(`Is Squarish: ${wall.isSquarish()}`);

const squareWall = new Rectangle(15, 15);
console.log(`Shape: ${squareWall.name}`);
console.log(`Area: ${squareWall.area()}`);
console.log(`Is Squarish: ${squareWall.isSquarish()}`);

  