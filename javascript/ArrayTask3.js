function squareNumbers(numbers) {
    return numbers.map(number => number ** 2);
  }
  
  let numbers = [2, 4, 6, 8, 10];
  let squaredNumbers = squareNumbers(numbers);
  
  module.exports = {squareNumbers};
  
  
  