const{sumUpArray}= require("./NewTask2.js");
const{countArray}= require("./NewArray.js");
const{increaseScores}= require("./ArrayTask2.js");
const{squareNumbers}= require("./ArrayTask3.js");
const{getAfternoonClasses}= require("./ArrayTask4.js");



test("sum the the array in two's", ()=>{
    let sum = [2, 3 , 4, 5, 6, 7];
    let result = sumUpArray(sum);
    expect(result).toBe[ 5, 9, 13 ]; 
    })

test("sum the the array in two", ()=>{
    let sum = [1, 3, 5, 1, 6, 3];
    let result = sumUpArray(sum);
    expect(result).toBe[ 4, 6, 9 ]; 
    })

test("count the numbers in the array", ()=>{
    let input = [1, 1, 2, 3, 2];
    let result = countArray(input);
    expect(result).toStrictEqual({ '1': 2, '2': 2, '3': 1 }); 
    })

test("count the numbers in the array", ()=>{
    let input = [5, 4, 5, 6, 7, 6];
    let result = countArray(input);
    expect(result).toStrictEqual({ '5': 2, '4': 1, '6': 2, '7': 1 }); 
    })


test("adding 5 points to exam grade", ()=>{
    let grades = [85, 92, 78, 88, 95];
    let result = increaseScores(grades);
    expect(result).toStrictEqual([ 90, 97, 83, 93, 100 ]); 
    })

test("square of numbers in a list of integer", ()=>{
    let number = [2, 4, 6, 8, 10];
    let result = squareNumbers(number);
    expect(result).toStrictEqual([ 4, 16, 36, 64, 100 ]); 
    })
    
test("finding classes offered in the afternoon", ()=>{
    let classTimings = ["9:00 AM", "11:00 AM", "1:00 PM", "3:00 PM", "5:00 PM"];
    let result = getAfternoonClasses(classTimings);
    expect(result).toStrictEqual([ '1:00 PM', '3:00 PM', '5:00 PM' ]); 
    })
        
    