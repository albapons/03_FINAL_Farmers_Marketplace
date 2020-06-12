import React from "react";
import { Link } from "react-router-dom";
import "./ProductsCard.css";
import InputNumber from "./InputNumber";
import FoodMilesNumber from "./FoodMilesNumber";

export default function ProductsCard(product) {
  return (
    <div className="productCard">
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
        <p>
          Seller id:
          {
            " " +
              product.product
                .seller_id /* We need to display the company_name from users table */
          }
        </p>
        {product.product.unit_price.toFixed(2) + " £"}
        <br />
        <div className="d-flex justify-content-between mt-3">
          <div>
            <i className="fas fa-car-side fa-2x CCblue mr-2"></i>{" "}
            <strong>Food Miles: </strong>
            {/* We need to do (user_CP) - (seller postcode from users table)  */}{" "}
            10 km
          </div>
          <i className="fas fa-cart-plus mx-3 CCblue fa-2x"></i>
        </div>
        <div className="my-4">
          <p>Lat is: {product.product.lat}</p>
          <p>Long is: {product.product.lng}</p>
          <FoodMilesNumber
            start={"Barcelona, Spain"}
            end={"Madrid, Spain"}
            // end={`lat: ${product.product.lat}, lng: ${product.product.lng}`}
          />
        </div>
      </Link>
    </div>
  );
}
