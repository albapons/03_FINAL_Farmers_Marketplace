import React from "react";
import "../App.css";
import InputNumber from "./InputNumber";

export default function ProductsCard(product) {
  return (
    <div className="buyersCard">
      {console.log(product)}
      <div className="container d-flex justify-content-center my-3">
        <img
          src="https://color.romanuke.com/wp-content/uploads/2016/08/cvetovaya-palitra-2987.png"
          alt="Error"
          width="200px"
          height="200px"
        />
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
      {/* <p width="50px">{product.product.description}</p> */}
      <br />
      {product.product.unit_price.toFixed(2) + " €"}
      <br />
      <div className="d-flex justify-content-between mt-3">
        <div>
          <i className="fas fa-car-side fa-2x CCblue mr-3"></i>{" "}
          <strong>Food Miles: </strong>
          {/* We need to do (user_CP) - (seller postcode from users table)  */}{" "}
          10 km
        </div>
        <i className="fas fa-cart-plus mx-3 CCblue fa-2x"></i>
      </div>
    </div>
  );
}
