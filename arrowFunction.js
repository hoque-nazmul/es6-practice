// previous function calling system
function doubleIt(x) {
    return x * 2;
}
const testDouble = function (a, b) {
    return a + b;
}
const result = testDouble(10, 5) ;
console.log(`Before Es6 System: ${result}`);

// After es6 : function calling system

console.log(`After Es6 Sytem`);
// for single paremeter
const square = (num) => num * num;
console.log(square(5));

// for multiple paremeter
const add = (x, y) => x + y;
const addNums = add(10, 10);
console.log(addNums);

// for empty paremeter
const printNums = () => 5;
console.log(printNums());

// for More Defination 
const doMath = (x, y) => {
    const sum = x + y;
    const diff = x - y;
    const mul = sum * diff;
    return mul;
}

console.log(doMath(4, 2));