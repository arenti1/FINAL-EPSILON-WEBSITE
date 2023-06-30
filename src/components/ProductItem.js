import React from "react";
import { Link } from "react-router-dom";

function ProductItem({ image, name, price }) {
  return (
    <div className="productItem" style={{backgroundColor: 'white'}}>
      <Link to="/details">
        <div style={{ backgroundImage: `url(${image})` }}> </div>
        <br/>
        <h1> {name} </h1>
        <p> ${price} </p>
      </Link>
    </div>
  );
}

export default ProductItem;
