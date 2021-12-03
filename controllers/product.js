const data = require("../assets/data");

function getProducts(query) {
  return data.filter((item) => item.name.toLowerCase().includes(query));
}

module.exports = { getProducts };
