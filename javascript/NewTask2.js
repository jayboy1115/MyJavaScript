function sumUpArray(arr, additions) {
    const result = [];
    
    for (let count = 0; count < additions; count++) {
      result.push(arr[count + 1] + additions[count]);
    }
    
    return result;
  }
  
  const input1 = [2, 3, 4, 5, 6, 7];                        
  const additions1 = [2, 5, 8];
  const output1 = sumUpArray(input1, additions1);
   
  module.exports = {sumUpArray};
  
  const input2 = [1, 3, 5, 1, 6, 3];
  const additions2 = [1, 1, 8];
  const output2 = sumUpArray(input2, additions2);

  module.exports = {sumUpArray};
  
  
  