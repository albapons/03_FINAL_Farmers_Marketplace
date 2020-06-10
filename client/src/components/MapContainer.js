import React, { Component } from "react";
import { Map, Marker, GoogleApiWrapper } from "google-maps-react";
import api from "../utils/apiMarkets";
//var geocoding = require("geocoding");

const apiKey = "AIzaSyD9qAIYJOoKf0haJPiuo1FbM3ec8_hiINY";

const mapStyles = {
  width: "100%",
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
  //Here is the modified search using the geocode library to return lat long co-ords to draw on the map
  // search = () => {
  //   const { input } = this.state;

  //   let records = api.getMarketsFiltered(input);
  //   for (const record of records) {
  //     geocoding({
  //       address: record.address1 + record.postcode + record.city,
  //     }).then(function (place) {
  //       this.setState({ ...this.state.places, place });
  //     });
  //   }
  // };

  render() {
    const { suggestions, places } = this.state;

    let bounds = new this.props.google.maps.LatLngBounds();
    for (let i = 0; i < places.length; i++) {
      bounds.extend(places[i].geometry.location);
    }

    return (
      <div className="container">
        <nav className="navbar navbar-light bg-light">
          <a className="navbar-brand" href="#">
            Find your nearest:{" "}
          </a>
          <ul>
            <li className="nav-item dropdown">
              <a
                className="nav-link dropdown-toggle"
                href="#"
                id="navbarDropdownMenuLink"
                role="button"
                data-toggle="dropdown"
                aria-haspopup="true"
                aria-expanded="false"
              >
                Dropdown link
              </a>
              <div
                className="dropdown-menu"
                aria-labelledby="navbarDropdownMenuLink"
              >
                <a className="dropdown-item" href="#">
                  Market
                </a>
                <a className="dropdown-item" href="#">
                  Farmer
                </a>
              </div>
            </li>
          </ul>
          <form className="form-inline">
            <input
              className="form-control mr-sm-2"
              type="search"
              value={this.state.input}
              onChange={this.handleChange}
              onKeyPress={this.handleKeyPress}
              placeholder="Search"
              aria-label="Search"
            />
            <button
              className="btn btn-outline-success my-2 my-sm-0"
              onClick={this.search}
            >
              Search
            </button>
          </form>
        </nav>
        <div className="row">
          <div className="col">
            <h3>Search results</h3>
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
