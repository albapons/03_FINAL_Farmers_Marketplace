import axios from "axios";
const apiRoot = "/markets";

export default {
  // GET all the markets
  getMarkets: () => {
    return axios.get(`${apiRoot}`).catch(function (error) {
      console.log(error);
    });
  },

  // GET one market
  getOneMarket: (id) => {
    return axios.get(`${apiRoot}/${id}`).catch(function (error) {
      console.log(error);
    });
  },

  // GET products filtered list by name
  getMarketsFiltered: (location) => {
    return axios.get(`${apiRoot}/${location}`).catch(function (error) {
      console.log(error);
    });
  },
};
