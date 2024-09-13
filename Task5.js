function findFirstDuplicate(numbers){
	let notDuplicate = -1;
	for(let counter = 0; counter < numbers.length; counter++) {
	 for(index = numbers.length; index > 0; index--) {
	   if(counter == index){
		continue;
	}
		if(numbers[counter] == numbers[index]){
		result = numbers[counter];
		 return result;
	}
    }
}
	return notDuplicate;
}

module.exports = {findFirstDuplicate};
		
 
