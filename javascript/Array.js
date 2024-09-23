let array = [1,2,3,"home",true]; // Array literal
//console.log(array)

let newArray = new Array(3);
newArray[0] = 10;
newArray.push(2);
newArray.push(3);
newArray.push(4);
newArray.push(5);

//console.log(newArray)

let result = Array.from("semicolon")
//console.log(result)

let answer = Array.of(1,2,3,4,6,7,3,4,6)
//console.log(answer)

let arrayOfNumbers = [1,2,3,4,5,67]
let slice = arrayOfNumbers.slice(2)
console.log(slice)