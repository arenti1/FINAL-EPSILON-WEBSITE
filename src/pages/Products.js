import React from "react";
import { ProductsList } from "../helpers/ProductsList";
import ProductItem from "../components/ProductItem";
import "../styles/Products.css";
import GrayBackground from "../img/gray.jpg";

function Products() {
  return (
    <div className="home" style={{ backgroundImage: `url(${GrayBackground})` }}>

      <div className="products">
        <br/>
        <br/>
        <h1 className="productsTitle">Our Products</h1>
        <br/>
        <br/>
        <br/>
        <br/>
      
        <div className="productsList">
          {ProductsList.map((productItem, key) => {
            return (
              <ProductItem
                key={key}
                image={productItem.image}
                name={productItem.name}
                price={productItem.price}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default Products;
