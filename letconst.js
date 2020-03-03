// constant is type of variable which value is unchangeable.
const wife = "Mukta";
console.log(wife);

// we can set a constant array value , even push a new value but can't change total constant array value.
// it's also applicable in object.
const birthDate = [1998, 1995, 1994]

birthDate[0] = "1993";

birthDate.push(1990);

// birthDate = [1990, 1985, 1980, 1976] //Don't change total birthDate array value;

console.log(birthDate);

// let such a type of variable which is changeable. but can't use it's value at outside of "{}".
let sum = 0;
for (let i = 0; i < 10; i++) {
    sum = sum + i;
}
// console.log(i); It's show a referenceError. becouse i is let variable. we can't use it at out of {}.

console.log(sum);


