function countArray(arr) {
    const result = {};
    for (let count = 0; count < arr.length; count++) {
        const number = arr[count];
        if (result[number] == undefined) {
            result[number] = 1;
          } else {
            result[number]++;
          }
    }     
    return result;
}

const input = [1, 1, 2, 3, 2];
const output = countArray(input);


const array = [5, 4, 5, 6, 7, 6];
const out = countArray(array);


module.exports = {countArray};