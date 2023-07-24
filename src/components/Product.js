import React from "react";

import "./Product.css";
import { useDispatch, useSelector } from "react-redux";
import { cartActions } from "../store/CartSlice";
const Product = ({ name, id, imgURL, price }) => {
 
  const dispatch=useDispatch()
  const itemAdd=()=>{
    dispatch(cartActions.addToCart({
      name,
      id,
      price,
    }))
  }
  return (
    <div className="card">
      <img src={imgURL} alt={name} />
      <h2>{name}</h2>
      <p>$ {price}</p>
      <button onClick={itemAdd}>Add to cart</button>
    </div>
  );
};

export default Product;
