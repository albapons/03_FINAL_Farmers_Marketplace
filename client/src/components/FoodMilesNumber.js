import React, { Component } from "react";
import { GoogleApiWrapper } from "google-maps-react";

const apiKey = process.env.REACT_APP_GOOGLE_API_KEY;

let d_service = null;

export class FoodMilesNumber extends Component {
  constructor(props) {
    super(props);

    this.state = {
      start: this.props.start,
      end: this.props.end,
      distance: "",
    };
  }

  initPlaces(mapProps, map) {
    const { google } = mapProps;
    d_service = new google.maps.DistanceMatrixService(map);
  }

  search = () => {
    const { start, end } = this.state;
    d_service.getDistanceMatrix(
      {
        origins: [start],
        destinations: [end],
        travelMode: "DRIVING",
      },
      (element) => {
        //here is where we can set the value of the foodmiles component
        this.setState({ distance: element.distance.text });
      }
    );
  };

  render() {
    const { distance } = this.state;

    return (
      <div className="container" style={{ width: "100%" }}>
        <h5>{distance}</h5>
      </div>
    );
  }
}

export default GoogleApiWrapper({
  apiKey,
})(FoodMilesNumber);
