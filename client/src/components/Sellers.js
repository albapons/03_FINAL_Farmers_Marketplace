import React, { Component } from "react";
import SellersCard from "./SellersCard";

export default class Sellers extends Component {
  render() {
    return (
      <div>
        <div className="container d-flex justify-content-center my-3 text-danger">
          MAYBE WE CAN ADD A GOOGLE MAP HERE
        </div>
        <div className="row d-flex justify-content-between">
          <SellersCard />
          <SellersCard />
          <SellersCard />
          <SellersCard />
        </div>
      </div>
    );
  }
}
