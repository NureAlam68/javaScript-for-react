// 1. How to declare a variable using let and const
const fatherName = "Saiful Islam";
let season = "Summer";
season = "winter";

// 6 basic conditions: >, <, ===, !==, <=, >=
// multiple conditions: &&, ||

if (fatherName === "saiful islam" || season === "Summer") {
} else if (fatherName == "Saiful Islam") {
} else {
}

// 3. array declare
// index
// length, push,pop

const numbers = [33, 2, 56, 78, 90, 43];
numbers[0] = 81; // 0 index er value change : index er value change
numbers[5] = 10; // 5 index er value change
console.log(numbers.length); // check array length
console.log(numbers);

// 4. loops

// for loop

// const number2 = [33, 2, 56, 78, 90, 4];
// for (let i = 0; i < number2.length; i++) {
//   const number = number2[i];  // index anojayi number pabo
//   console.log(number);
// }

const marks = [12, 34, 55, 76, 89];
for (let i = 0; i < marks.length; i++) {
  const mark = marks[i];
  //   console.log(mark);
}

// for of loop
for (let mark of marks) {
  console.log(mark);
}

// 5. function

function multiply(num1, num2) {
  const result = num1 * num2;
  return result;
}
const output = multiply(2, 3);
console.log("multiply:", output);

// 6. object

const person = {
  name: "Nure Alam",
  age: 23,
  hobby: ["web developer", "software engineer"],
};

const personAge = "age"; // property name store in a variable

console.log(person.age); // directly access by property / key
console.log(person["age"]); // access via property / key name string
console.log(person[personAge]); // access via property name in a variable
