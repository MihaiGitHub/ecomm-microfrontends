import faker from "faker";

let products = "";

for (let i = 0; i < 5; i++) {
  const name = faker.commerce.productName();

  products += `<div>${name}</div>`;
}

// when this code is run inside the Container, the ID needs to be present inside the container as well
document.querySelector("#dev-products").innerHTML = products;
