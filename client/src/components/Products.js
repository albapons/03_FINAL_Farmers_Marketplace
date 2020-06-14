import React, { useState } from "react";
import GeoLocator from "./GeoLocator";
import ProductList from "./ProductsList";

export default function Products(props) {
  const [lat, setLat] = useState(props.lat);
  const [lng, setLng] = useState(props.lng);

  const setLocation = (lat, lng) => {
    setLat({ lat });
    setLng({ lng });
  };
  return (
    <div className="container">
      {console.log(
        `PRODUCTs: This is props.lat lng: ${props.lat}, ${props.lng}`
      )}
      <div className="row">
        <div>
          <i className="fas fa-shopping-basket CCblue fa-2x"></i>
          <h5 className="title">IT'S TIME TO DO THE SHOPPING? </h5>
          <h5 className="subtitle">Get your products!</h5>
        </div>
      </div>
      <GeoLocator
        lat=""
        lng=""
        setLocation={(lat, lng) => setLocation(lat, lng)}
      />
      {console.log(`PRODUCTs: This is lat lng: ${lat.lat}, ${lng.lng}`)}
      <ProductList lat={lat} lng={lng} />
    </div>
  );
}
