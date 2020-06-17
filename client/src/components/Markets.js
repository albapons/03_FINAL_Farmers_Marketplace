import React, { Component } from "react";
import MarketsCard from "./MarketsCard";
import MapContainer from "./MapContainer";
import FoodMilesNumber from "./FoodMilesNumber";

export default class Markets extends Component {
  constructor(props) {
    super(props);
    this.state = {
      lat: this.props.lat,
      lng: this.props.lng,
      location: { lat: this.props.lat, lng: this.props.lng },
    };
  }
  render() {
    return (
      <div className="container">
        <div className="d-flex row">
          {/*This works now*/}

          <MapContainer lat={this.state.lat} lng={this.state.lng} />
        </div>
        <div className="d-flex row"></div>
        <div className="d-flex justify-content-between"></div>
      </div>
    );
  }
}
