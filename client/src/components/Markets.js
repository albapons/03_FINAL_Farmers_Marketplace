import React, { Component } from "react";
import MarketsCard from "./MarketsCard";
import MapContainer from "./MapContainer";
import Geocoder from "./Geocoder";

export default class Markets extends Component {
  render() {
    return (
      <div className="container">
        <div className="d-flex row">
          <Geocoder address="16, Victor rd, London" />
          <MapContainer />
        </div>
        <div className="d-flex row"></div>
        <div className="d-flex justify-content-between"></div>
      </div>
    );
  }
}
