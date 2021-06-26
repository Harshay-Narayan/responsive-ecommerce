import React from "react";
import classes from "./ProductCards.module.css";



const ProductCards = (props) => {
  
  return (
    <div className={classes["product-card"]} onClick={props.onShowCartModal}>
      <img src={props.image_location} className={classes["product-image"]} />
      <p className={classes['product-name']}>{props.brand}</p>
      <p className={classes['product-description']}>{props.name}</p>
      <p className={classes.price}>{props.price}</p>
    </div>
  );
};

export default ProductCards;
