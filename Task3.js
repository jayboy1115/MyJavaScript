function countOddNumbers(numbers){
let oddNumber = 0

 for (let counter = 0; counter < numbers.length; counter++) {
  	if(numbers[counter] % 2 == 1){
  	oddNumber += numbers[counter];
    }
}
	return oddNumber;
}

module.exports = {countOddNumbers};