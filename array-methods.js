const products = [
  { name: "laptop", price: 45000, brand: "HP", color: "silver" },
  { name: "phone", price: 5000, brand: "Realme", color: "blue" },
  { name: "watch", price: 4000, brand: "Casio", color: "black" },
  { name: "sunglass", price: 500, brand: "Ribon", color: "golden" },
  { name: "camera", price: 9000, brand: "canon", color: "gray" },
];

// 1. map: get all brand, name, price in a array using map
const brands = products.map((product) => product.brand);
const productName = products.map((product) => product.name);
const prices = products.map((product) => product.price);
// console.log(brands);
// console.log(productName);
// console.log(prices);

// map array return korbe tai variable a rakte hobe but forEach return kore na tai variable a rakte hobe na

// 2. forEach
products.forEach((product) => console.log(product.name));
products.forEach((product) => console.log(product.price));

// 3. filter: condition jara manbe tader return korbe array hisabe
const cheap = products.filter((product) => product.price <= 5000);
// console.log(cheap);

const specificName = products.filter((product) => product.name.includes("n")); // namer modde n ace kina ta jante .includes('n)
console.log(specificName);

// 4. find : same as filter but onek gola condition match korleo first ta return korbe without array
const special = products.find((product) => product.name.includes("n"));
console.log(special);
