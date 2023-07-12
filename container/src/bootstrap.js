// boostrap.js needs a file from Products. Fetch remoteEntry.js to figure out how to fetch that
// in network tab can see the order of file loading
// main.js, remoteEntry.js, src_bootstrap_js.js, src_index_js.js, faker.js
///////
// if webpack can not find a "products" dependency in node_modules, then it takes a look at the ModuleFederationPlugin remotes property
import "products/ProductsIndex"; // imports ProductsIndex module from Products (Remote)

// same for cart module
import "cart/CartShow";

console.log("container");
