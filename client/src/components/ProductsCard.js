import React from "react";
import { Link } from "react-router-dom";
import "./ProductsCard.css";
import InputNumber from "./InputNumber";
import FoodMilesNumber from "./FoodMilesNumber";

export default function ProductsCard(product, lat, lng) {
  let locationStart = { lat: 55.93, lng: -3.118 };
  let locationEnd = {
    lat: parseFloat(product.product.lat),
    lng: parseFloat(product.product.lng),
  };

  return (
    <div className="productCard">
      {console.log(locationStart)}
      <Link to={`/products/${product.product.id}`} product={product}>
        <div className="container d-flex justify-content-center my-3">
          <img src={product.product.img} alt="Error" className="productImg" />
        </div>
        <div className="container d-flex justify-content-center mt-3">
          {/* We need to save the value of the Input Number for each product */}
          <InputNumber />
        </div>
        <br />
        Ref. 00{product.product.id}
        <h6 className="mt-2">
          <strong>{product.product.name}</strong>
        </h6>
        <p>{`Seller: ${product.product.company_name}`}</p>
        {product.product.unit_price.toFixed(2) + " £"}
        <br />
        <div className="d-flex justify-content-between mt-3">
          <div className="ml-1 row">
            <i className="fas fa-car-side fa-2x CCblue mr-2"></i>{" "}
            <strong>Food Miles: </strong>
            <FoodMilesNumber start={locationStart} end={locationEnd} />
          </div>
          <i className="fas fa-cart-plus mx-3 CCblue fa-2x"></i>
        </div>
      </Link>
    </div>
  );
}
