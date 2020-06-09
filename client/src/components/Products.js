import ProductsCard from "./ProductsCard";
import { useHistory } from "react-router-dom";
import React, { useState, useEffect } from "react";
import api from "../utils/apiProducts";

export default function Products() {
  const [products, setProducts] = useState([]);
  const [productSearched, setSearch] = useState("");
  let history = useHistory();

  // const getProducts = () => {
  //   api.getProducts().then((response) => {
  //     setProducts(response.data);
  //   });
  // };

  // useEffect(() => {
  //   getProducts();
  // }, []);

  const handleChange = (e) => {
    setSearch(e.target.value);
  };

  const performSearch = () => {
    history.push(`/search?productSearched=${productSearched}`);
  };

  useEffect(() => {
    performSearch();
    getProductsFiltered();
  }, [productSearched]);

  const getProductsFiltered = () => {
    api.getProductsFiltered(productSearched).then((response) => {
      setProducts(response.data);
    });
  };

  return (
    <div className="container">
      <div className="row my-5">
        <div className="col-md-3 d-flex ">
          <div className="row">
            <div className="md-form mb-0">
              <input
                type="text"
                id="name"
                name="name"
                className="form-control"
                value={productSearched}
                onChange={(e) => handleChange(e)}
              />
              <label htmlFor="name">Search...</label>
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
