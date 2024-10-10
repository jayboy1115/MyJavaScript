const{addOne}= require("./AdditionArray.js");
const{largestTwoNumbers}= require("./LargestArray.js");
const Person = require("./OopNew.js");
const Calculator = require("./AddUp.js");
const Rectangle = require("./Shape.js");


test("add one to array", ()=>{
    let array = [1,2,4];
    let result = addOne(array);
    expect(result).toBe[ 1,2,5]; 
    })

test("check for the two largest numbers in array", ()=>{
    let array = [1, 9, 3, 4, 8];
    let result = largestTwoNumbers(array);
    expect(result).toBe[ 9, 8 ]; 
    })   

test("test for name attribute", ()=>{
    let firstPerson = new Person("johnson","male");
    expect(firstPerson.name).toBe("johnson")
})

test("Test that calculator can add", ()=>{
    let calculator = new Calculator(8,9);
    let result = calculator.add()
    expect(result).toBe(17)
})

test("Test if it's a rectangle", ()=>{
    let myRectangle = new Rectangle(15,15);
    let result = myRectangle.isSquare()
    expect(result).toBe(true)
})

test("Test if it's not a rectangle", ()=>{
    let myRectangle = new Rectangle(15,20);
    let result = myRectangle.isSquare()
    expect(result).toBe(false)
})

test("Test if it's not a rectangle", ()=>{
    let myRectangle = new Rectangle(5,5);
    let result = myRectangle.getArea()
    expect(result).toBe(25)
})



