import faker from "faker";

const mount = (el) => {
  const cartText = `<div>You have ${faker.random.number()} items in your cart`;

  el.innerHTML = cartText;

  // check to see if running this process in isolation
  if (process.env.NODE_ENV === "development") {
    // if we are in development, then this ID will exist in Cart app
    // (if running through the container app, there is no guarantee this ID will exist)
    const el = document.querySelector("#cart-dev");

    console.log("mount ", el);

    if (el) {
      console.log("cart running in isolation");
      // if inside this if, then we are running this Remote in isolation, not in Container app
      mount(el);
    }
  }
};

export { mount };
