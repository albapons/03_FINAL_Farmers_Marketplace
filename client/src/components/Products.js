import React, { Component } from "react";
import ProductsCard from "./ProductsCard";

export default class Products extends Component {
  render() {
    return (
      <div>
        <div className="col-3 d-flex align-items-center">
          <div className="square">FILTERS</div>
        </div>
        <div className="col-3 d-flex align-items-center"></div>

        <div className="row d-flex justify-content-between">
          <ProductsCard />
          <ProductsCard />
          <ProductsCard />
          <ProductsCard />
          {/* Maybe we can use pagination */}
        </div>
      </div>
    );
  }
}
