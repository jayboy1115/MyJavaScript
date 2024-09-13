const{sumEvenNumbers}= require("./Task1.js");
const{findMax}= require("./Task2.js");
const{countOddNumbers}= require("./Task3.js");
const{isPrime}= require("./Task4.js");
const{findFirstDuplicate}= require("./Task5.js");
const{reverseArray}= require("./Task6.js");
const{factorial}= require("./Task7.js");
const{isPalindrome}= require("./Task8.js");



let total = [1, 2, 9, 6, 3];
test("sum all even numbers",()=>{
let result = sumEvenNumbers(total);
expect(result).toBe(8); 
})

test("find the highest in the array", ()=>{
let highest = [1, 3 , 5, 6, 33, 46];
let result = findMax(highest);
expect(result).toBe(46); 
})

test("count the odd numbers in tthe array", ()=>{
let oddNumbers = [1, 5, 6, 10, 11];
let result = countOddNumbers(oddNumbers);
expect(result).toBe(17); 
})

test("check if number is prime", ()=>{
let prime = [2];
let result = isPrime(prime);
expect(result).toBe(true); 
})

test("find first duplicate in array", ()=>{
let duplicate = [1, 2, 3, 4, 4, 5];
let result = findFirstDuplicate(duplicate);
expect(result).toBe(4); 
})

test("find first duplicate in array", ()=>{
let duplicate = [1, 2, 1, 2];
let result = findFirstDuplicate(duplicate);
expect(result).toBe(1); 
})

test("find first duplicate in array", ()=>{
let duplicate = [2, 1, 1, 2];
let result = findFirstDuplicate(duplicate);
expect(result).toBe(2); 
})

test("take array and reverse it", ()=>{
let reverse = [1, 2, 3, 4, 5];
let result = reverseArray(reverse);
expect(result).toStrictEqual([5, 4, 3, 2, 1]); 
})

test("check factorial of the number", ()=>{
let num = (5);
let result = factorial(num);
expect(result).toBe(120); 
})

test("check if a string is palindrome", ()=>{
let str = ("racecar");
let result = isPalindrome(str);
expect(result).toBe(true); 
})

test("check if a string is palindrome", ()=>{
let str = ("johnson");
let result = isPalindrome(str);
expect(result).toBe(false); 
})