let testScores = [45, 67, 72, 88, 95, 60, 75, 82, 68, 90];

function test(testScores) {
  let scores = testScores.filter((over) => over >= 70);
  return scores;
}

console.log(test(testScores));
