import React from "react";
import InputNumber from "./InputNumber";

import "./ProductsCard.css";

export default function ProductsCard(product) {
  return (
    <div className="productCardDisplay">
      {console.log(product)}
      <div className="row">
        <div className="col-md-5">
          <div className="container d-flex justify-content-center my-3">
            <img
              src="https://color.romanuke.com/wp-content/uploads/2016/08/cvetovaya-palitra-2987.png"
              alt="Error"
              width="auto"
              height="auto"
            />
          </div>
        </div>
        <div className="col-md-6">
          <br />
          Ref. 00{product.id}
          <h6 className="mt-2">
            <strong>{product.name}</strong>
          </h6>
          <p>
            Seller id:
            {
              " " +
                product.seller_id /* We need to display the company_name from users table */
            }
          </p>
          <p>{product.description}</p>
          <br />
          {/* {product.unit_price.toFixed(2) + " €"} */}
          <br />
          <div className="row d-flex justify-content-between mt-3">
            <div className="col-md-4">
              <i className="fas fa-car-side fa-2x CCblue mr-2"></i>{" "}
              <strong>Food Miles: </strong>
              {/* We need to do (user_CP) - (seller postcode from users table)  */}{" "}
              10 km
            </div>
            <div className="col-md-4 d-flex justify-content-center">
              {/* We need to save the value of the Input Number for each product */}
              <InputNumber />
            </div>
            <div className="col-md-4 d-flex justify-content-center">
              <i className="fas fa-cart-plus mx-3 CCblue fa-2x"></i>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
