import React, { Component } from "react";
import { GoogleApiWrapper } from "google-maps-react";

const apiKey = process.env.REACT_APP_GOOGLE_API_KEY;

let g_service = null;

class ToLatLong extends Component {
  constructor(props) {
    super(props);

    this.state = {
      address: this.props.address,
      pos: {},
    };
  }

  componentDidMount() {
    const { google } = this.props;
    g_service = new google.maps.Geocoder(document.createElement("div"));

    this.search();
  }
  search = () => {
    const { address } = this.state;
    const { google } = this.props;
    let pos;
    // I copied and pasted this code from here https://gist.github.com/SamSamskies/6033264
    // and enabled geocoding on my Google account but now I'm getting an error that I don't understand
    g_service
      .geocode({ address: address }, function (results, status) {
        if (status === google.maps.GeocoderStatus.OK) {
          console.log(results[0].geometry.location.lat());
          console.log(results[0].geometry.location.lng());
        } else {
          alert(
            "Geocode was not successful for the following reason: " + status
          );
        }
      })
      .then((results, status) => {
        pos = new google.maps.LatLng(
          results[0].geometry.location.lat(),
          results[0].geometry.location.lng()
        );
        this.setState({ pos });
      });
  };

  render() {
    const { pos } = this.state;
    return <span>Hello!</span>;
  }
}

export default GoogleApiWrapper({
  apiKey,
})(ToLatLong);
