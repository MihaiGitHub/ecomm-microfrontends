import faker from "faker";

// take in a reference to an HTML element
const mount = (el) => {
  let products = "";

  for (let i = 0; i < 5; i++) {
    const name = faker.commerce.productName();

    products += `<div>${name}</div>`;
  }

  // when this code is run inside the Container, the ID needs to be present inside the container as well
  el.innerHTML = products;
};

// process is environment variable set by webpack
if (process.env.NODE_ENV === "development") {
  // if we are in development, then this ID will exist in Products app
  // (if running through the container app, there is no guarantee this ID will exist)
  const el = document.querySelector("#dev-products");

  console.log("mount ", el);

  if (el) {
    console.log("products running in isolation");
    // if inside this if, then we are running this Remote in isolation, not in Container app
    mount(el);
  }
}

export { mount };
