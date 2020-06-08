import axios from "axios";
const apiRoot = "/products";

export default {
  // GET all the products
  getProducts: () => {
    return axios.get(`${apiRoot}`).catch(function (error) {
      console.log(error);
    });
  },

  // GET one apartment images
  getOneProduct: (id) => {
    return axios.get(`${apiRoot}/${id}`).catch(function (error) {
      console.log(error);
    });
  },
};
