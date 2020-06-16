import React, { Component } from "react";
import { GoogleApiWrapper } from "google-maps-react";
const apiKey = process.env.REACT_APP_GOOGLE_API_KEY;
let d_service = null;
class FoodMilesNumber extends Component {
  constructor(props) {
    super(props);
    this.state = {
      start: this.props.start,
      end: this.props.end,
      distance: "",
    };
  }
  componentDidMount() {
    const { google } = this.props;
    d_service = new google.maps.DistanceMatrixService(
      document.createElement("div")
    );
    this.search();
  }
  search = () => {
    const { start, end } = this.state;
    d_service.getDistanceMatrix(
      {
        origins: [start],
        destinations: [end],
        travelMode: "DRIVING",
      },
      (elements) => {
        //here is where we can set the value of the foodmiles component
        this.setState({
          distance: elements?.rows[0]?.elements[0]?.distance?.text,
        });
      }
    );
    return this.state.distance;
  };
  render() {
    const { distance } = this.state;
    return <span>{distance}</span>;
  }
}
export default GoogleApiWrapper({
  apiKey,
})(FoodMilesNumber);
