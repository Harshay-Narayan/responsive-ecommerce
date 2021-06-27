import React from "react";
import classes from "./ProductDetailsModal.module.css";
import CloseIcon from "../svg/CloseIcon";

const CartModal = (props) => {
  return (
    <div className={classes["cart-modal-container"]}>
      <div className={classes["image-container"]}>
        <img src={props.image_location} className={classes["main-image"]} alt={props.brand}/>
      </div>
      <div className={classes["details-container"]}>
        <div className={classes.close} onClick={props.onClose}>
          <CloseIcon />
        </div>
        <div className={classes["brand-name"]}>{props.brand}</div>
        <div className={classes.description}>
          {props.description}
        </div>
        <div className={classes["special-text"]}>Special price</div>
        <div>
          <span className={classes["current-price"]}>{props.price}</span>
          <span className={classes["old-price"]}>{props.old_price}</span>
          <span className={classes["special-text"]}>{props.discount}% off</span>
        </div>
        <div>
          <span className={classes["warranty-text"]}>Warranty</span>
          <span className={classes["warranty"]}>{props.warranty} Months</span>
        </div>
        <div className={classes['stock-alert']}>
        Hurry, Only {props.quantity} left!
        </div>
        <div>
          <button className={classes.button}>Add to Cart</button>
        </div>
      </div>
    </div>
  );
};

export default CartModal;
