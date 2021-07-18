import React, { useContext, useEffect, useState } from "react";
import classes from "./ProductDetailsModal.module.css";
import CloseIcon from "../svg/CloseIcon";
import CartContext from "../../store/cart-context";

const ProductDetailsModal = (props) => {
  const cartCtx = useContext(CartContext);
  const [disableButtonState, setDisableButtonState] = useState(false);

  useEffect(() => {
    console.log("ProductDetailsModal useEffect Running")
    let cartProducts = cartCtx.products;
    for (let i = 0; i < cartProducts.length; i++) {
      if (cartProducts[i].product_id === props.id) {
        setDisableButtonState(true);
      }
    }
  }, [cartCtx.products,props.id]);


  const addThisProductToCart = () => {
    cartCtx.addToCart({
      product_id: props.id,
      product_brand: props.brand,
      product_description: props.description,
      product_delivery_charges: props.delivery_charges,
      product_current_price: props.price,
      product_old_price: props.old_price,
      product_discount: props.discount,
      product_image_location:props.image_location,
      product_stock_quantity:props.quantity,
      product_quantity_in_cart:1
    });
  };

  

  return (
    <div className={classes["cart-modal-container"]}>
      <div className={classes["image-container"]}>
        <img
          src={props.image_location}
          className={classes["main-image"]}
          alt={props.brand}
        />
      </div>
      <div className={classes["details-container"]}>
        <div className={classes.close} onClick={props.onClose}>
          <CloseIcon />
        </div>
        <div className={classes["brand-name"]}>{props.brand}</div>
        <div className={classes.description}>{props.description}</div>
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
        <div className={classes["stock-alert"]}>
          Hurry, Only {props.quantity} left!
        </div>
        <div>      
            <button className={`${classes.button} ${disableButtonState&&classes.disabled}`} onClick={addThisProductToCart} disabled={disableButtonState}>
              Add to Cart
            </button>
            {disableButtonState && <div className={classes['success-text']}><span className={classes['check-mark']}>✔</span>Product added to Cart !</div>}
        </div>
      </div>
    </div>
  );
};

export default ProductDetailsModal;
