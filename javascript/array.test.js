const{addOne}= require("./AdditionArray.js");


test("add one to array", ()=>{
    let array = [1,2,4];
    let result = addOne(array);
    expect(result).toBe[ 1,2,5]; 
    })