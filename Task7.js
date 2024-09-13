function factorial(number) {
  let result = 1;

  for(let counter = 1; counter <= number; counter++){
    result *= counter;
  }

  return result;
}

module.exports = {factorial};