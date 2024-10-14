const numbers = [33, 2, 56, 78, 90, 43];

const person = {
  name: "Nure Alam",
  age: 23,
  hobby: ["web developer", "software engineer"],
};

// 1. template string
const about = `My name is ${person.name} age of ${person.age}.Has ${numbers[1]} hobby.First hobby is ${person.hobby[0]}.`;

console.log(about);

// 2. arrow function

const getOne = () => 1; // has no parameter
const addTwo = (num) => num + 2; // has one parameter
const isEven = (x) => x % 2 === 0; //has one parameter
const addThree = (a, b, c) => a + b + c; // has three parameter
const doMath = (n1, n2) => {
  // has one more line so need write return
  const sum = n1 + n2;
  const avg = sum / 2;
  return avg;
};

console.log(getOne());
console.log(addTwo(2));
console.log(addThree(1, 2, 3));
console.log(isEven(2));
console.log(doMath(1, 3));

// 3. spread operator

const newNumbers = [...numbers];

// create a new array from an older array and add an element
const currentNumbers = [...numbers, 44]; // comma diye onek golo element add kora jabe

numbers.push(22);
numbers.push(33);

console.log(numbers);
console.log(newNumbers);
console.log(currentNumbers);
