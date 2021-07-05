import React from "react";
import classes from "./ProductCards.module.css";

const ProductCards = (props) => {
  const showProductDetails = () => {
    props.onShowProductDetailsModal({
      id:props.id,
      brand: props.brand,
      description: props.description,
      price: props.price,
      old_price: props.old_price,
      discount: props.discount,
      warranty: props.warranty,
      quantity: props.quantity,
      image_location: props.image_location,
      delivery_charges:props.delivery_charges
    });
  };

  return (
    <div className={classes["product-card"]} onClick={showProductDetails}>
      <img
        src={props.image_location}
        className={classes["product-image"]}
        alt={props.brand}
      />
      <p className={classes["product-name"]}>{props.brand}</p>
      <p className={classes["product-description"]}>{props.name}</p>
      <p className={classes.price}>{props.price}</p>
    </div>
  );
};

export default ProductCards;
