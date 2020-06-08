import axios from "axios";
const apiRoot = "/products";

export default {
  // GET all the apartments
  getAllApartments: () => {
    return axios.get(`${apiRoot}`).catch(function (error) {
      console.log(error);
    });
  },
};
