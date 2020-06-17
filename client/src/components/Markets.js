import React, { Component } from "react";
import MapContainer from "./MapContainer";

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
        <div className="row">
          <div>
            <i className="fas fa-store CCbeige fa-2x"></i>
            <h5 className="title">IT'S TIME TO GO TO THE MARKET? </h5>
          </div>
        </div>
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
