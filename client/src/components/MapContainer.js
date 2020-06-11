import React, { Component } from "react";
import { Map, Marker, InfoWindow, GoogleApiWrapper } from "google-maps-react";
import api from "../utils/apiMarkets";
//var geocoding = require("geocoding");

const apiKey = process.env.REACT_APP_GOOGLE_API_KEY;

const mapStyles = {
  width: "100vw",
  height: "100vh",
};
const style = {
  width: "100vw",
  height: "100vh",
};

const center = {
  lat: 51.5074,
  lng: 0.1278,
};

let d_service = null;
let service = null;
let map, infoWindow, myLocation;

export class MapContainer extends Component {
  constructor(props) {
    super(props);

    this.state = {
      input: "",
      suggestions: [],
      places: [],
      markets: [],
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
    //console.log(google.maps);
    d_service = new google.maps.DistanceMatrixService(map);
    infoWindow = new google.maps.InfoWindow();
  }

  // This is the doce from Google API docs for creating a currentlocation parker
  // initMap() {
  //   map = new google.maps.Map(document.getElementById("map"), {
  //     center: { lat: -34.397, lng: 150.644 },
  //     zoom: 6,
  //   });
  //   infoWindow = new google.maps.InfoWindow();

  //   // Try HTML5 geolocation.
  //   if (navigator.geolocation) {
  //     navigator.geolocation.getCurrentPosition(
  //       function (position) {
  //         var pos = {
  //           lat: position.coords.latitude,
  //           lng: position.coords.longitude,
  //         };

  //         infoWindow.setPosition(pos);
  //         infoWindow.setContent("Location found.");
  //         infoWindow.open(map);
  //         map.setCenter(pos);
  //       },
  //       function () {
  //         handleLocationError(true, infoWindow, map.getCenter());
  //       }
  //     );
  //   } else {
  //     // Browser doesn't support Geolocation
  //     handleLocationError(false, infoWindow, map.getCenter());
  //   }
  // }

  // handleLocationError(browserHasGeolocation, infoWindow, pos) {
  //   infoWindow.setPosition(pos);
  //   infoWindow.setContent(
  //     browserHasGeolocation
  //       ? "Error: The Geolocation service failed."
  //       : "Error: Your browser doesn't support geolocation."
  //   );
  //   infoWindow.open(map);
  // }
  //Here is the modified search using the geocode library to return lat,lng co-ords to draw on the map
  // search = () => {
  //   const { input } = this.state;

  //   let records = api.getMarketsFiltered(input);
  //   for (const record of records) {
  //     geocoding({
  //       address: record.address1 + record.postcode + record.city,
  //     }).then(function (place) {
  //       this.setState({ ...this.state.places, place });
  //       this.setState({ ...this.state.markets, record });
  //     });
  //   }
  // };
  search = () => {
    const { input } = this.state;
    d_service.getDistanceMatrix(
      {
        origins: [center],
        destinations: [
          "West Hampstead, London, England",
          "Notting Hill Gate, London, England",
          "Ladbroke Grove, London, England, London, England",
        ],
        travelMode: "DRIVING",
      },
      (elements) => {
        for (const rec of elements.rows[0].elements) {
          //here is where we can set the value of the foodmiles component
          console.log("Here are the distances: ", rec.distance.text);
        }
      }
    );
    service.textSearch({ query: input }, (suggestions) => {
      this.setState({ suggestions });
    });
  };

  render() {
    const { suggestions, places } = this.state;

    let bounds = new this.props.google.maps.LatLngBounds();
    for (let i = 0; i < places.length; i++) {
      bounds.extend(places[i].geometry.location);
    }

    return (
      <div className="container" style={{ width: "100%" }}>
        <nav
          className="navbar navbar-light bg-light"
          style={{ width: "1000px" }}
        >
          <a className="navbar-brand" href="#">
            Find your nearest Market
          </a>

          <li className="input-group">
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
          </li>
        </nav>
        <div className="row">
          <div className="col">
            <div className="card" style={{ width: "100%" }}>
              <div className="card-header">Suggested Markets</div>
              <ul className="list-group list-group-flush">
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
          </div>
          <div className="col">
            <Map
              google={this.props.google}
              onReady={this.initPlaces}
              zoom={8}
              style={{ height: "500px", width: "500px" }}
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
