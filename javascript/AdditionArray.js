function addOne(arr) {
    for (let count = arr.length - 1; count >= 0; count--) {
        if (arr[count] == 9) {
            arr[count] = 0;
        } else {
            arr[count]++;
            return arr;
        }
    }
    return [...arr];
}

// console.log(addOne([9, 9, 9]));
// console.log(addOne([2, 3, 4]));

module.exports = {addOne};