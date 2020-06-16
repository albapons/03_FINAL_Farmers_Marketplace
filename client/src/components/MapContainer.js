import React, { Component } from "react";
import { Map, Marker, InfoWindow, GoogleApiWrapper } from "google-maps-react";
import api from "../utils/apiMarkets";

const apiKey = process.env.REACT_APP_GOOGLE_API_KEY;

let myBounds;
export class MapContainer extends Component {
  constructor(props) {
    super(props);

    this.state = {
      bounds: "",
      suggestions: [],
      places: [],
    };
  }

  onMarkerClick = (props, marker, e) => {
    const infoWindow = new props.google.maps.InfoWindow({
      content: `${props.name}`,
    });
    infoWindow.open(props.map, marker);
  };

  initPlaces(mapProps, map, ctx) {
    const { google } = mapProps;
    google.maps.event.addListener(map, "idle", function () {
      let bounds = map.getBounds();
      localStorage.setItem("bounds", bounds.toUrlValue());
      //This works now..
      ctx.searchDB();
    });
  }

  // Here is the modified search using the geocode library to return lat,lng co-ords to draw on the map
  searchDB = async () => {
    let res = await api.getMarketsFiltered(localStorage.getItem("bounds"));
    this.setState({ places: [] });
    this.setState({ suggestions: [] });
    if (res?.data) {
      for (let i = 0; i < res.data.length; i++) {
        let record = res.data[i];
        this.setState({ suggestions: [...this.state.suggestions, record] });
        this.setState({ places: [...this.state.places, record] });
      }
    }
  };

  render() {
    const { suggestions, places } = this.state;

    myBounds = new this.props.google.maps.LatLngBounds();

    return (
      <div className="container" style={{ width: "100%" }}>
        <nav
          className="navbar navbar-light bg-light"
          style={{ width: "1000px" }}
        >
          <a className="navbar-brand" href="#">
            Find your nearest Market
          </a>
        </nav>
        <div className="row">
          <div className="col">
            <div className="card" style={{ width: "100%" }}>
              <div className="card-header">Suggested Markets</div>
              <ul className="list-group list-group-flush">
                {suggestions.map((place) => (
                  <li
                    key={place.id}
                    className="list-group-item d-flex justify-content-between align-items-center"
                  >
                    <div>
                      <div>
                        <strong>{place.name}</strong>
                      </div>
                      <span className="text-muted">{place.address1}</span>
                    </div>
                    <div>
                      <span className="text-muted">{`Day: ${place.day}     ${place.start_time} - ${place.end_time}`}</span>
                    </div>
                    <button
                      className="btn btn-link"
                      onClick={() =>
                        /* navigate to that market page*/ this.state
                      }
                    >
                      More Info
                    </button>
                  </li>
                ))}
              </ul>
            </div>
          </div>
          <div className="col">
            <Map
              id="myMap"
              google={this.props.google}
              onReady={(mapProps, map) => this.initPlaces(mapProps, map, this)}
              zoom={14}
              style={{ height: "500px", width: "500px" }}
              initialCenter={{ lat: localStorage.lat, lng: localStorage.lng }}
            >
              {places.map((market, i) => (
                <Marker
                  onClick={this.onMarkerClick}
                  name={market.name}
                  position={{ lat: market.lat, lng: market.lng }}
                  key={i}
                />
              ))}
              {places.map((market, i) => (
                <InfoWindow onClose={this.onInfoWindowClose} key={i}>
                  <div>
                    <h1>{market.name}</h1>
                    <h2>{market.address1 + market.postcode + market.city}</h2>
                  </div>
                </InfoWindow>
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
