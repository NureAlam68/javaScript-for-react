// 1. json to object-string

const person = {
  name: "Nure Alam",
  age: 23,
  hobby: ["web developer", "software engineer"],
};

const personJSON = JSON.stringify(person); // object to json string
const personObj = JSON.parse(personJSON); // json string to object
console.log(person);
console.log(personJSON);
console.log(personObj);

// 2. fetch

// fetch("url")
//   .then((res) => res.json())
//   .then((data) => console.log(data));

// 3. all keys and values get in a object with a array

const keys = Object.keys(person);
const values = Object.values(person);

console.log(keys);
console.log(values);

// forEach use in array when need no return ; map use in array when need return.

const nums = [22, 45, 67, 26];
nums.forEach((num) => console.log(num));
const doubleNums = nums.map((n) => n * 2);
console.log(doubleNums);

// for of use on array like object
// for in loop use in object

// add or remove from an array
const products = [
  { name: "laptop", price: 45000, brand: "HP", color: "silver" },
  { name: "phone", price: 5000, brand: "Realme", color: "blue" },
  { name: "watch", price: 4000, brand: "Casio", color: "black" },
  { name: "sunglass", price: 500, brand: "Ribon", color: "golden" },
  { name: "camera", price: 9000, brand: "canon", color: "gray" },
];

const newProduct = {
  name: "webcam",
  price: "2400",
  brand: "lal",
  color: "black",
};

// copy products and then add newProduct
const newProducts = [...products, newProduct];
console.log(newProducts);

// create a new array without one specific item
const remaining = products.filter((product) => product.name !== "phone");
console.log(remaining);
