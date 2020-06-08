import React, { Component } from "react";
import ProductsCard from "./ProductsCard";

export default class Products extends Component {
  render() {
    return (
      <div className="body container">
        <div className="row my-5">
          <div className="col-md-3 d-flex align-items-center">
            <div className="square">FILTERS</div>
          </div>
          <div className="col-md-9">
            <div className="row">
              <div className="col-md-4">
                <ProductsCard />
              </div>
              <div className="col-md-4">
                <ProductsCard />
              </div>
              <div className="col-md-4">
                <ProductsCard />
              </div>
              <div className="col-md-4">
                <ProductsCard />
              </div>
              <div className="col-md-4">
                <ProductsCard />
              </div>
              {/* Maybe we can use pagination */}
            </div>
          </div>
        </div>
      </div>
    );
  }
}
