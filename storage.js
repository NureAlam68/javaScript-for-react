// add data localStorage directly
localStorage.setItem("userId", 21068);

// add data in localStorage dynamically
const addToLocalStorage = () => {
  const idInput = document.getElementById("storage-id");
  const id = idInput.value;
  const valueInput = document.getElementById("storage-value");
  const value = valueInput.value;

  if (id && value) {
    localStorage.setItem(id, value); // id and value truthy hole add hobe
  }
  idInput.value = "";
  valueInput.value = "";
};

// added array in localStorage
localStorage.setItem("numbers", JSON.stringify([22, 44, 33, 77]));

// added object in localStorage
const pen = { price: 5, name: "High-School" };
localStorage.setItem("pen", JSON.stringify(pen));

// get object localStorage
const penJson = localStorage.getItem("pen");
console.log(penJson); // only seen in console

const penObj = JSON.parse(penJson);
console.log(penObj);  // only seen in console


// session storage is same as localStorage
sessionStorage