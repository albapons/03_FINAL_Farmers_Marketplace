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

  // GET products filtered list by location
  //where bounds is an object:
  //i.e. {south: "51.00000, west: -0.210000, north: 51.00200, east: =0.201000"}
  getMarketsFiltered: (bounds) => {
    bounds = JSON.stringify(bounds);
    return axios.get(`${apiRoot}/q=${bounds}`).catch(function (error) {
      console.log(error);
    });
  },
};
