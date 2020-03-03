// before Es6
const ages = [32, 43, 23, 54, 12];
const ages2 = [12, 42, 65, 21];

const allAges = ages.concat(ages2).concat([5]);

console.log(allAges);

// After Es6 
// Array Concatenation is so easy in Es6
const nums = [32, 32, 42, 43, 65, 76, 23]
const nums2 = [31, 30, 48, 50, 15, 26, 20]

const allNums = [...nums, ...nums2, ...[100]];
console.log(allNums);

// it's count the array value not key
const maximum = Math.max(...nums);
console.log(maximum);