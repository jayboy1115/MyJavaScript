function findMax(numbers){
let sum = 0

 for (let counter = 0; counter < numbers.length; counter++) {
  	if(numbers[counter] > sum){
  	sum = numbers[counter];
    }
}
	return sum;
}

module.exports = {findMax};