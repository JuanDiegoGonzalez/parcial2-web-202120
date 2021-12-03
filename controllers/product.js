const data = require("../assets/data");

function getProducts(query) {
  return !query
    ? data
    : data.filter((item) => item.name.toLowerCase().includes(query));
}

module.exports = { getProducts };
