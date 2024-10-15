// truthy: 'string', number, ' ', {}, [], true
// falsy: '', 0, false, null, undefined

let myVar = 500;
//check truthy
if (myVar) {
  myVar = myVar * 5;
} else {
  myVar = 0;
}

let myMoney = 0;
// check falsy
if (!myMoney) {
  myMoney = 100;
  //   console.log(myMoney);
} else {
  myMoney = 0;
  //   console.log(myMoney);
}
console.log(myMoney);

// if else condition
const money = 980;
let food;
if (money > 100) {
  food = "Biriyani";
} else {
  food = "Tea and biscuits";
}
// console.log(food);

// ternary operator
let food1 = money > 100 ? "Biriyani" : "Tea and biscuits";
console.log(food1);

let drink = money > 100 && myVar > 100 ? "coke" : "filter water";
console.log(drink);

// number to string conversion
const num1 = 50;
const numStr = num1 + ""; // number to string
console.log(num1);
console.log(numStr);

// string to number
const inputStr = "570";
const inputNum = +inputStr; // string to number
console.log(inputStr);
console.log(inputNum);

// using ternary operator for call function
let isActive = true;
const showUser = () => console.log("Display User");
const hideUser = () => console.log("Hide User");
isActive ? showUser() : hideUser();
// use && if the left side is true then right side will be executed
isActive && showUser();
// use || if the left side is false then right side will be executed
isActive || hideUser();

// toggle boolean : true to false/ false to true
isActive = !isActive;