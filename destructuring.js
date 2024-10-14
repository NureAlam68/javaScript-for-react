// array destructuring: index maintain korbe

const numbers = [33, 43, 62, 89];

//make array using function
const makeArray = (num1, num2) => {
  const array = [num1, num2]; // make array using function
  return array;
};
console.log(makeArray(33, 43)); // get array call function

const [x, y] = [33, 43, 62, 89]; // using direct array
const [a, b] = numbers; // using array in a variable
// const [f, l] = [33, 43] // using function direct array
const [f, l] = makeArray(33, 43); // using function and call

console.log(x, y);
console.log(a, b);
console.log(f, l);

// object - array
const person = {
  name: "Nure Alam",
  age: 23,
  hobby: ["web developer", "software engineer"],
};

// const [hobby1, hobby2] = ["web developer", "software engineer"];
const [hobby1, hobby2] = person.hobby; // object to array
console.log(hobby1);
console.log(hobby2);

// object destructuring: serial maintain korbe na but key num same hobe left side a

// const { name, age } = person;
const { name, age } = {
  name: "Nure Alam",
  age: 23,
  hobby: ["web developer", "software engineer"],
};

console.log(name);
console.log(age);

const employee = {
  ide: "VS Code",
  designation: "developer",
  machine: "Hp",
  languages: ["HTML", "CSS", "JS"],
  specification: {
    height: 66,
    weight: 68,
    address: "Chandpur",
    drink: "Milk",
    watch: {
      color: "black",
      price: 500,
      brand: "garmin",
    },
  },
};

const { machine, ide } = employee;
const { height, address } = employee.specification;
const [l1, l2, l3] = employee.languages;
const { brand, price } = employee?.specification?.watch;  // optional chaining korle na thake error hobe na thakle value dibe

console.log(ide);
console.log(address);
console.log(l3);
console.log(brand);
