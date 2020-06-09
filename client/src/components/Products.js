import ProductsCard from "./ProductsCard";

import React, { useState, useEffect } from "react";
import api from "../utils/apiProducts";

export default function Products() {
  const [products, SetProducts] = useState([]);

  const getProducts = () => {
    api.getProducts().then((response) => {
      // console.log(response.data);
      SetProducts(response.data);
    });
  };

  useEffect(() => {
    getProducts();
  }, []);

  return (
    <div className="container">
      <div className="row my-5">
        <div className="col-md-3 d-flex">
          <div className="row">
            <div className="md-form mb-0">
              <input
                type="text"
                id="name"
                name="name"
                className="form-control"
              />
              <label htmlFor="name">Search...</label>
            </div>
          </div>
          <div className="row">
            <div className="md-form mb-0">
              <input
                type="text"
                id="name"
                name="name"
                className="form-control"
              />
              <label htmlFor="name">Seller id...</label>
            </div>
          </div>
        </div>
        <div className="col-md-9">
          <div className="row">
            {products.map((product, i) => (
              <div key={i}>
                <ProductsCard product={product} />
              </div>
            ))}
          </div>
          {/* Maybe we can use pagination */}
        </div>
      </div>
    </div>
  );
}
