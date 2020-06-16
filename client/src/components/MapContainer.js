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
let infoWindow;
let myBounds;
export class MapContainer extends Component {
  constructor(props) {
    super(props);

    this.state = {
      bounds: "",
      input: "",
      suggestions: [],
      places: [],
      markets: [],
    };
  }

  handleChange = (e) => {
    this.setState({ input: e.target.value });
  };

  handleKeyPress = (event) => {
    if (event.key === "Enter") {
      this.searchDB();
    }
  };

  onMarkerMouseover = (props, marker, e) => {
    console.log(
      "This is the props: ",
      props,
      "This is the marker: ",
      marker,
      "This is the event: ",
      e
    );
    const infoWindow = new props.google.maps.InfoWindow({
      content: `${props.name}`,
    });
    infoWindow.open(props.map, marker);
  };

  initPlaces(mapProps, map) {
    const { google } = mapProps;
    //service = new google.maps.places.PlacesService(map);
    //console.log(google.maps);

    google.maps.event.addListener(map, "idle", function () {
      let bounds = map.getBounds();
      //this doesn't work
      //this.setState({ bounds: bounds.toUrlValue() });
      localStorage.setItem("bounds", bounds.toUrlValue());
      //This doesn't work either..
      //this.searchDB();
      //neither does this
      // for (let i = 0; i < this.state.places.length; i++) {
      //   let location = {
      //     lat: this.state.places[i].lat,
      //     lng: this.state.places[i].lng,
      //   };
      //   myBounds.extend(location);
      // }
    });
  }

  // componentDidMount() {
  //   let myBounds = document.getElementById("myMap")?.getBounds();
  //   console.log("Here are the bounds: ", myBounds);
  // }

  // Here is the modified search using the geocode library to return lat,lng co-ords to draw on the map
  searchDB = async () => {
    let res = await api.getMarketsFiltered(localStorage.getItem("bounds"));
    console.log(res.data);
    for (const record of res.data) {
      this.setState({ suggestions: [...this.state.suggestions, record] });
      console.log("record id: ", record.id);
      if (!this.state.places.some((el) => el.id == record.id)) {
        this.setState({ places: [...this.state.places, record] });
      }
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

    myBounds = new this.props.google.maps.LatLngBounds();

    console.log("There are this many places: ", places.length);
    // for (let i = 0; i < places.length; i++) {
    //   let location = { lat: places[i].lat, lng: places[i].lng };
    //   myBounds.extend(location);
    // }

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
              onReady={this.initPlaces}
              zoom={14}
              style={{ height: "500px", width: "500px" }}
              initialCenter={{ lat: localStorage.lat, lng: localStorage.lng }}
            >
              {places.map((market, i) => (
                <Marker
                  onMouseover={this.onMarkerMouseover}
                  name={market.name}
                  position={{ lat: market.lat, lng: market.lng }}
                  key={i}
                />
              ))}
              {places.map((market, i) => (
                <InfoWindow onClose={this.onInfoWindowClose}>
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
