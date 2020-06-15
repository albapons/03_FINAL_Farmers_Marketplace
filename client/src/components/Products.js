import React from "react";
import ProductList from "./ProductsList";

export default function Products(props) {
  return (
    <div className="container">
      <div className="row">
        <div>
          <i className="fas fa-shopping-basket CCblue fa-2x"></i>
          <h5 className="title">IT'S TIME TO DO THE SHOPPING? </h5>
          <h5 className="subtitle">Get your products!</h5>
        </div>
      </div>
      <ProductList />
    </div>
  );
}
