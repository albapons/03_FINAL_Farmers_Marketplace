import ProductsCard from "./ProductsCard";
import React, { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import api from "../utils/apiProducts";

export default function Products() {
  const [products, setProducts] = useState([]);
  const [name, setSearch] = useState("");
  const history = useHistory();

  const performSearch = () => {
    history.push(`/products?name=${name}`);
  };

  const handleChange = (e) => {
    setSearch(e.target.value);
  };

  const getProductsFiltered = () => {
    api.getProductsFiltered(name).then((response) => {
      console.log(response.data);
      setProducts(response.data);
    });
  };

  useEffect(() => {
    performSearch();
    getProductsFiltered();
  }, [name]);

  return (
    <div className="container">
      <div className="row">
        <div>
          <i class="fas fa-shopping-basket CCblue fa-2x"></i>
          <h5 className="title">IT'S TIME TO DO THE SHOPPING? </h5>
          <h5 className="subtitle">Get your products!</h5>
        </div>
      </div>
      <div className="row">
        <div className="col-md-3 d-flex">
          <div className="row">
            <div className="md-form mb-0">
              <input
                type="text"
                id="name"
                name="name"
                className="form-control"
                value={name}
                onChange={(e) => handleChange(e)}
              />
              <label htmlFor="name">Search...</label>
            </div>
          </div>
        </div>
        <div className="col-md-9">
          {console.log(products)}
          {!products?.length ? (
            <div className="row">
              {/* <i className="fas fa-exclamation-triangle text-light fa-5x my-4"></i> */}
              <div className="alert alert-danger my-4 text-center" role="alert">
                {`Sorry, there are no products to show!`}
              </div>
            </div>
          ) : (
            <div className="row">
              {products.map((product, i) => (
                <div key={i}>
                  <ProductsCard product={product} />
                </div>
              ))}
            </div>
          )}
        </div>
        {/* Maybe we can use pagination */}
      </div>
    </div>
  );
}
