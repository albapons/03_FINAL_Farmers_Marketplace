import ProductsCard from "./ProductsCard";
import React, { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import api from "../utils/apiProducts";

export default function Products(props) {
  const [products, setProducts] = useState([]);
  const [name, setSearch] = useState("");
  const history = useHistory();
  const [lat, setLat] = useState(props.lat);
  const [lng, setLng] = useState(props.lng);

  const performSearch = () => {
    history.push(`/products?name=${name}`);
  };

  const handleChange = (e) => {
    setSearch(e.target.value);
  };

  const getProductsFiltered = () => {
    api.getProductsFiltered(name).then((response) => {
      setProducts(response.data);
    });
  };

  useEffect(() => {
    performSearch();
    getProductsFiltered();
  }, [name]);

  return (
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
        {!products?.length ? (
          <div className="row">
            <div
              className="alert alert-danger my-4 text-center w-100"
              role="alert"
            >
              {`Sorry, there are no products to show!`}
            </div>
          </div>
        ) : (
          <div className="row">
            {products.map((product, i) => (
              <div key={i}>
                <ProductsCard product={product} lat={lat} lng={lng} />
              </div>
            ))}
          </div>
        )}
      </div>
      {/* Maybe we can use pagination */}
    </div>
  );
}
