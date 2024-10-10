function largestTwoNumbers(arr) {
    const sorted = arr.sort((a, b) => b - a);
return sorted.slice(0, 2);


  }
  
  //console.log(largestTwoNumbers([1, 9, 3, 4, 8])); 

  module.exports = {largestTwoNumbers};
  
  

  
  
  