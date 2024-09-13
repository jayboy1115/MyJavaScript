function isPrime(numbers){
let prime = 0;

 for (counter = 1; counter < numbers; counter++) {
  	if(numbers % counter == 0){
  	prime++;
    }
}
 if(prime == 1) {return true;

} else {
	return false;
   }
}

module.exports = {isPrime};