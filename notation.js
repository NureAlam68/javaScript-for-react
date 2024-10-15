const person = {
  name: "Lal mia",
  profession: "Traffic surgeon",
  age: 35,
  address: "Shahabag",
  25: "Summer",
  "son-season": "Sunny",
};

// dot notation
const prof1 = person.profession; // use direct key name
console.log(prof1);

// bracket notation
const prof2 = person["profession"]; // use key name in a string
console.log(prof2);

const pName = "profession";
const prof3 = person[pName]; // use key name in a variable
console.log(prof3);

// key name number hole
const season = person[25]; // bracket er pore number without string
console.log(season);

// key name a -, _, thakle
const sonSeason = person["son-season"]; // use key name in a string
console.log(sonSeason);
