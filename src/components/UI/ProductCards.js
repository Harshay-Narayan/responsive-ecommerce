import React from "react";
import classes from "./ProductCards.module.css";
import watch from "../../assets/watch.jpg";

const ProductCards = () => {
  return (
    <div className={classes["product-card"]}>
      <img src={watch} className={classes["product-image"]} />
      <p className={classes['product-name']}>Titan Watch</p>
      <p className={classes['product-description']}>Watch for men</p>
      <p className={classes.price}>25.99</p>
    </div>
  );
};

export default ProductCards;
