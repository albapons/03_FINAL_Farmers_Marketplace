import React, { Component } from "react";
import ProductsCard from "./ProductsCard";

export default class Catalog extends Component {
  render() {
    return (
      <div>
        <div className="row d-flex justify-content-between">
          <ProductsCard />
          <ProductsCard />
          <ProductsCard />
          <ProductsCard />
        </div>
      </div>
    );
  }
}
