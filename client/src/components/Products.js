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
    <div className="body container">
      {console.log(products)}
      <div className="row my-5">
        <div className="col-md-3 d-flex align-items-center">
          <div className="square">FILTERS</div>
        </div>
        <div className="col-md-9">
          <div className="row">
            {products.map((product) => {
              {
                console.log(product);
              }
              // <div className="col-md-4">

              //   <ProductsCard />
              // </div>;
            })}
          </div>
          {/* Maybe we can use pagination */}
        </div>
      </div>
    </div>
  );
}
