import React, { Component } from "react";
import SuppliersCard from "./SuppliersCard";

export default class Suppliers extends Component {
  render() {
    return (
      <div className="row">
        <div className="col-3 d-flex align-items-center">
          <div className="square">MAYBE WE CAN ADD A GOOGLE MAP HERE</div>
        </div>
        <div className="col-9 d-flex justify-content-between">
          <SuppliersCard />
          <SuppliersCard />
          <SuppliersCard />
        </div>
      </div>
    );
  }
}
