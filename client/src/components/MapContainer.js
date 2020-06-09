import React, { Component } from "react";
import { Map, Marker, GoogleApiWrapper } from "google-maps-react";

// const apiKey = process.env.REACT_APP_GOOGLE_API_KEY;

const apiKey = "AIzaSyBW1yUN5ZPFHlTg-QIdvdhjexHzx1YszsE"
const mapStyles = {
  width: "200%",
  height: "700px",
};

const center = {
  lat: 51.5074,
  lng: 0.1278,
};

let service = null;

export class MapContainer extends Component {
  constructor(props) {
    super(props);

    this.state = {
      input: "",
      suggestions: [],
      places: [],
    };
  }

  savePlace = (place) => {
    this.setState({ places: [...this.state.places, place] });
  };

  handleChange = (e) => {
    this.setState({ input: e.target.value });
  };

  handleKeyPress = (event) => {
    if (event.key === "Enter") {
      this.search();
    }
  };

  onMarkerClick = (props, marker, e) => {
    console.log(props, marker, e);
  };

  initPlaces(mapProps, map) {
    const { google } = mapProps;
    service = new google.maps.places.PlacesService(map);
  }

  search = () => {
    const { input } = this.state;
    service.textSearch({ query: input }, (suggestions) => {
      this.setState({suggestions, });
    });
  };

  render() {
    const { suggestions, places } = this.state;

    let bounds = new this.props.google.maps.LatLngBounds();
    for (let i = 0; i < places.length; i++) {
      bounds.extend(places[i].geometry.location);
    }

    return (
      <div className="container">
        <div className="row">
          <div className="col">
            <div className="form-inline d-flex justify-content-between mb-4">
              <input
                type="text"
                value={this.state.input}
                onChange={this.handleChange}
                className="form-control flex-grow-1"
                placeholder="Find Location"
                onKeyPress={this.handleKeyPress}
              />
              <button onClick={this.search} className="btn btn-success ml-2 font-weight-bold">
                Go to Map
              </button>
            </div>
            <h3>Suggestions</h3>
            <ul className="list-group">
              {suggestions.map((place, i) => (
                <li
                  key={i}
                  className="list-group-item d-flex justify-content-between align-items-center"
                >
                  <div>
                    <div>
                      <strong>{place.name}</strong>
                    </div>
                    <span className="text-muted">
                      {place.formatted_address}
                    </span>
                  </div>

                  <button
                    className="btn btn-outline-primary"
                    onClick={() => this.savePlace(place)}
                  >
                    Show
                  </button>
                </li>
              ))}
            </ul>
          </div>
          <div className="col">
            <Map
              google={this.props.google}
              onReady={this.initPlaces}
              zoom={14}
              style={mapStyles}
              bounds={bounds}
              initialCenter={center}
            >
              {places.map((marker, i) => (
                <Marker
                  onClick={this.onMarkerClick}
                  name={marker.name}
                  position={marker.geometry.location}
                  key={i}
                />
              ))}
            </Map>
          </div>
        </div>
      </div>
    );
  }
}

export default GoogleApiWrapper({
  apiKey,
})(MapContainer);


