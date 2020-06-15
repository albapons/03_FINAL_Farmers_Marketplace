import React, { Component } from "react";
import { Map, Marker, InfoWindow, GoogleApiWrapper } from "google-maps-react";
import api from "../utils/apiMarkets";

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

let service = null;
let map, infoWindow, myLocation;
let bounds, location;
export class MapContainer extends Component {
  constructor(props) {
    super(props);

    this.state = {
      input: "",
      suggestions: [],
      places: [
        {
          address1: "Hydethorpe Rd",
          city: "London",
          company_name: "London Farmers' Markets",
          company_no: "3815770",
          day: "Saturday",
          email: "info@lfm.org.uk",
          end_time: "13:00:00",
          id: 1,
          lat: 51.444015,
          lng: -0.14432,
          location: "bla",
          mob_no: "0207833 0338",
          name: "Balham Farmers' Market",
          postcode: "SW12 OJA",
          start_time: "09:00:00",
          tel_no: "0207833 0338",
          website: "http://www.lfm.org.uk",
        },
      ],
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
      this.searchDB();
    }
  };

  onMarkerClick = (props, marker, e) => {
    console.log(props, marker, e);
  };

  initPlaces(mapProps, map) {
    const { google } = mapProps;
    service = new google.maps.places.PlacesService(map);
    //console.log(google.maps);
    infoWindow = new google.maps.InfoWindow();
  }

  // componentDidMount() {
  //   let myBounds = document.getElementById("myMap").getBounds();
  //   console.log("Here are the bounds: ", myBounds);
  // }

  // Here is the modified search using the geocode library to return lat,lng co-ords to draw on the map
  searchDB = async () => {
    console.log(bounds.toJSON());
    let res = await api.getMarketsFiltered(bounds.toJSON());
    console.log(res.data);
    for (const record of res.data) {
      this.setState({ suggestions: [...this.state.suggestions, record] });
    }
  };

  search = () => {
    const { input } = this.state;
    service.textSearch({ query: input }, (suggestions) => {
      this.setState({ suggestions });
      console.log(suggestions);
    });
  };

  render() {
    const { suggestions, places } = this.state;

    bounds = new this.props.google.maps.LatLngBounds();
    for (let i = 0; i < places.length; i++) {
      let location = { lat: places[i].lat, lng: places[i].lng };
      bounds.extend(location);
      //console.log("Here are the LatLngBounds: ", bounds.toJSON());
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
              onClick={this.searchDB}
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
              id="myMap"
              google={this.props.google}
              onReady={this.initPlaces}
              zoom={14}
              style={{ height: "500px", width: "500px" }}
              bounds={bounds}
              initialCenter={{ lat: places[0].lat, lng: places[0].lng }}
            >
              {places.map((market) => (
                <Marker
                  onClick={this.onMarkerClick}
                  name={market.name}
                  position={{ lat: market.lat, lng: market.lng }}
                  key={market.id}
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
