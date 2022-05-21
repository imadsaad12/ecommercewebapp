import React from "react";
import "../products.css";

export default function ({ item }) {
  return (
    <div className="product">
      <div className="productimagediv">
        <img src={item.img} className="productimage" />
      </div>
      <span className="producttitle">{item.title}</span>
      <span className="productprice">{item.price}$</span>
    </div>
  );
}
