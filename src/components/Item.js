import React from "react";
import { useState } from "react";

function Item({ name, category }) {
  const[inCart,setInCart]=useState(false)
  const items = inCart ? "in-cart" : ""
  function addToCart(){
    setInCart((inCart)=>!inCart)
  }
  return (
    <li className={items}>
      <span>{name}</span>
      <span className="category">{category}</span>
      <button className="add" onClick={addToCart}>{inCart? "Remove from Cart" : "Add to Cart"}</button>
    </li>
  );
}

export default Item;
