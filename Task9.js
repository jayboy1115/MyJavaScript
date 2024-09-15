function sumMultiplesOfThreeAndFive(number) {
  let sum = 0;
  for (let counter = 0; counter < number; counter++) {
    if (counter % 3 == 0 || counter % 5 == 0) {
      sum += counter;
    }
  }
  return sum;
}

module.exports = {sumMultiplesOfThreeAndFive};