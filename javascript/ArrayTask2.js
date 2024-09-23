function increaseScores(grades) {
    return grades.map(grade => grade + 5);
  }
  
  let examGrades = [85, 92, 78, 88, 95];
  let increasedGrades = increaseScores(examGrades);
  
  module.exports = {increaseScores};


