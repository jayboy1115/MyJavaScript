function reverseArray(arr){
  let reverse = [];

  for(let counter = arr.length - 1; counter >= 0; counter--){
    reverse.push(arr[counter]);
  }
  return reverse;
}

module.exports = {reverseArray};