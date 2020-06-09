import axios from "axios";
const apiRoot = "/products";

export default {
  // GET all the products
  getProducts: () => {
    return axios.get(`${apiRoot}`).catch(function (error) {
      console.log(error);
    });
  },

  // GET one product
  getOneProduct: (id) => {
    return axios.get(`${apiRoot}/${id}`).catch(function (error) {
      console.log(error);
    });
  },

  // GET products filtered list by name
  // We need to do SELECT * FROM products WHERE name LIKE
  getProductsFiltered: (productSearched) => {
    return axios.get(`${apiRoot}/${productSearched}`).catch(function (error) {
      console.log(error);
    });
  },
};
