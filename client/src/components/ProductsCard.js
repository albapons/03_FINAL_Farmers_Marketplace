import React from "react";
import { Link } from "react-router-dom";
import "./ProductsCard.css";
import InputNumber from "./InputNumber";
import FoodMilesNumber from "./FoodMilesNumber";

export default function ProductsCard(props) {
  let locationStart = {
    lat: parseFloat(props.lat),
    lng: parseFloat(props.lng),
  };
  let locationEnd = {
    lat: parseFloat(props.product.lat),
    lng: parseFloat(props.product.lng),
  };

  return (
    <div className="productCard">
      {console.log(
        `PRODUCTSCARD: This is locationStart and locationEnd ${JSON.stringify(
          locationStart
        )}, ${JSON.stringify(locationEnd)}`
      )}
      <Link
        to={`/products/${props.product.id}`}
        product={props.product}
        start={locationStart}
        end={locationEnd}
      >
        <div className="container d-flex justify-content-center my-3">
          <img src={props.product.img} alt="Error" className="productImg" />
        </div>
        <div className="container d-flex justify-content-center mt-3">
          {/* We need to save the value of the Input Number for each product */}
          <InputNumber />
        </div>
        <br />
        Ref. 00{props.product.id}
        <h6 className="mt-2">
          <strong>{props.product.name}</strong>
        </h6>
        <p>{`Seller: ${props.product.company_name}`}</p>
        {props.product.unit_price.toFixed(2) + " £"}
        <br />
        <div className="d-flex justify-content-between mt-3">
          <div className="ml-1 row">
            <i className="fas fa-car-side fa-2x CCblue mr-2"></i>{" "}
            <strong>Food Miles: </strong>
            {/* <FoodMilesNumber start={locationStart} end={locationEnd} /> */}
          </div>
          <i className="fas fa-cart-plus mx-3 CCblue fa-2x"></i>
        </div>
      </Link>
    </div>
  );
}
