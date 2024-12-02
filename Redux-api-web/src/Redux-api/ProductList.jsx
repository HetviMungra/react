import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchProducts } from "../features/Product/ProductsSlice";
import { Link } from "react-router-dom";
import SearchBar from "../Redux-api/SearchBar";
import './ProductList.css'

const ProductList = () => {
  const dispatch = useDispatch();
  const { items, status } = useSelector((state) => state.products);
  const [filteredProducts, setFilteredProducts] = useState(items);

  useEffect(() => {
    if (status === "idle") {
      dispatch(fetchProducts());
    }
  }, [dispatch, status]);

  useEffect(() => {
    setFilteredProducts(items);
  }, [items]);

  const handleSearch = (query) => {
    if (query.trim() === "") {
      setFilteredProducts(items);
    } else {
      setFilteredProducts(
        items.filter((product) =>
          product.title.toLowerCase().includes(query.toLowerCase())
        )
      );
    }
  };

  return (
    <div className="product-list">
      <SearchBar onSearch={handleSearch} />
      {status === "loading" && <p>Loading products...</p>}
      {status === "failed" && <p>Failed to load products.</p>}
      {status === "succeeded" && (
        <div className="products-grid">
          {filteredProducts.map((product) => (
            <div key={product.id} className="product-card">
              <img src={product.image} alt={product.title} />
              <h3>{product.title}</h3>
              <p>${product.price.toFixed(2)}</p>
              <Link to={`/product/${product.id}`} className="details-button">
                View Details
              </Link>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default ProductList;
