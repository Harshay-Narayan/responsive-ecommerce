import React, { useContext } from "react";
import CartContext from "../../store/cart-context";
import classes from "./CartlistItem.module.css";

const CartlistItem = (props) => {
  const cartCtx = useContext(CartContext);
  const removerThisProductFromCart = () => {
    cartCtx.removeFromCart(props.id);
  };
  const changeTheQuantity=(operator)=>{
    cartCtx.changeQuantity(operator,props.id)
  }
  const index = cartCtx.products.findIndex(product=>product.product_id===props.id)
  const quantityInCart = cartCtx.products[index].product_quantity_in_cart
  return (
    <div className={classes["product-list-items"]}>
      <div className={classes["image-container"]}>
        <img src={props.image_location} alt="Product" />
      </div>
      <div>{props.brand}</div>
      <div>{props.description}</div>
      <div className={classes.prices}>
        <span className={classes["current-price"]}>{props.price}</span>
        <span className={classes["old-price"]}>{props.old_price}</span>
        <span className={classes.discount}>{props.discount}</span>
      </div>
      <div className={classes["cart-footer"]}>
        <div>
          <button className={classes["form-control-button"]} onClick={changeTheQuantity.bind(null,'decrease')}>-</button>
          {/* <input
            type="number"
            max="5"
            min="0"
            defaultValue="1"
            className={classes.input}
          /> */}
          <div className={classes.label}>{quantityInCart}</div>
          <button className={classes["form-control-button"]} onClick={changeTheQuantity.bind(null,'increase')}>+</button>
        </div>
        <div className={classes.remove} onClick={removerThisProductFromCart}>
          remove
        </div>
      </div>
    </div>
  );
};

export default CartlistItem;
