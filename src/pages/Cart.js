import React,{useContext} from "react";
import CartlistItem from "../components/UI/CartlistItem";
import CartContext from "../store/cart-context";
import classes from "./Cart.module.css";
const Cart = () => {
  const cartCtx = useContext(CartContext);
  let cartProducts = cartCtx.products;
  return (
    <div className={classes["cart-flex-container"]}>
      <div className={classes["product-list-box"]}>
        <div className={classes["product-list-header"]}>My Cart(2)</div>
        <div className={classes["horizontal-line"]}></div>
        {
          cartProducts.map((product)=>{
            return <CartlistItem
            id={product.product_id}
            brand={product.product_brand}
            description={product.product_description}
            price={product.product_current_price}
            old_price={product.product_old_price}
            discount={product.product_discount}
            image_location={product.product_image_location}
          />
          })
        }

        <div className={classes["place-order-section"]}>
          <button className={classes["order-button"]}>Place Order</button>
        </div>
      </div>

      <div className={classes["sub-total-box"]}>
        <div className={classes["sub-total-header"]}>Price Details</div>
        <div className={classes["horizontal-line"]}></div>
        <div className={classes.subtotal}>
          <span>Price</span>
          <span className={classes["total-amount"]}>709</span>
        </div>
        <div className={classes["discount-amount"]}>
          <span>Discounts</span>
          <span className={classes["discount-value"]}>115</span>
        </div>
        <div className={classes["delivery-charges"]}>
          <span>Delivery Charges</span>
          <span className={classes["free-delivery"]}>FREE</span>
        </div>
        <div className={classes.total}>
          <span>Total</span>
          <span className={classes["total-value"]}>765</span>
        </div>

        <div className={classes["final-purchase-message"]}>
          You will save <span className={classes["discount-value"]}>115</span>{" "}
          on this order.
        </div>
      </div>
    </div>
  );
};

export default Cart;
