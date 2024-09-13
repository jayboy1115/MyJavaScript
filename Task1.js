function sumEvenNumbers(even){
let sum = 0;

for(let number in even){
if(even[number] % 2 == 0){
sum += even[number];
    }
}
	return sum;
}

module.exports = {sumEvenNumbers}; 
