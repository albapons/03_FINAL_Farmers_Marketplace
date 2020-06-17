import axios from "axios";
const apiRoot = "/suppliers";

export default {
  // GET one supplier
  getOneSupplier: (id) => {
    return axios.get(`${apiRoot}/${id}`).catch(function (error) {
      console.log(error);
    });
  },
};
