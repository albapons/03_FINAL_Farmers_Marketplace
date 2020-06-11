import React, { Component } from "react";
import MarketsCard from "./MarketsCard";
import MapContainer from "./MapContainer";
import FoodMilesNumber from "./FoodMilesNumber";

export default class Markets extends Component {
  render() {
    return (
      <div className="container">
        <div className="d-flex row">
          <FoodMilesNumber
            start="Barcelona, Spain"
            end="16, Victor rd, London"
          />
          <MapContainer />
        </div>
        <div className="d-flex row"></div>
        <div className="d-flex justify-content-between"></div>
      </div>
    );
  }
}
