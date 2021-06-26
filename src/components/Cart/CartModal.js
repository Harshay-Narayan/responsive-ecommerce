import React from "react";
import classes from "./CartModal.module.css";
import watch from "../../assets/watch.jpg";
import CloseIcon from "../svg/CloseIcon";

const CartModal = (props) => {
  return (
    <div className={classes["cart-modal-container"]}>
      <div className={classes["image-container"]}>
        <img src={watch} className={classes["main-image"]} />
      </div>
      <div className={classes["details-container"]}>
        <div className={classes.close} onClick={props.onClose}>
          <CloseIcon />
        </div>
        <div className={classes["brand-name"]}>Titan Watch</div>
        <div className={classes.description}>
          LCS-8188 BLUE DIAL AND SILVER STRAP DAY & DATE FUNCTIONING WATCH FOR
          BOYS Analog Watch - For Men
        </div>
        <div className={classes["special-text"]}>Special price</div>
        <div>
          <span className={classes["current-price"]}>314</span>
          <span className={classes["old-price"]}>1,799</span>
          <span className={classes["special-text"]}>82% off</span>
        </div>
        <div>
          <span className={classes["warranty-text"]}>Warranty</span>
          <span className={classes["warranty"]}>6 Months</span>
        </div>
        <div className={classes['stock-alert']}>
        Hurry, Only 9 left!
        </div>
        <div>
          <button className={classes.button}>Add to Cart</button>
        </div>
      </div>
    </div>
  );
};

export default CartModal;
