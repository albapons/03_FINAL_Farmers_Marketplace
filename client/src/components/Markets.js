import React, { Component } from "react";
import MarketsCard from "./MarketsCard";
import MapContainer from "./MapContainer";

export default class Markets extends Component {
  render() {
    return (
      <div className="container">
        <div className="d-flex row">
          <MapContainer />
        </div>
        <div className="d-flex row"></div>
        <div className="d-flex justify-content-between"></div>
      </div>
    );
  }
}
