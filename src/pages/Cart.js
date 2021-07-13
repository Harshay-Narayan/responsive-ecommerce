import React,{useContext} from "react";
import {Link, Route} from 'react-router-dom';
import Footer from "../components/Footer";
import CartlistItem from "../components/UI/CartlistItem";
import CartSubtotal from "../components/UI/CartSubtotal";
import CartContext from "../store/cart-context";
import classes from "./Cart.module.css";
import Checkout from "./Checkout";

const Cart = () => {
  const cartCtx = useContext(CartContext);
  let cartProducts = cartCtx.products;
  // console.log(cartProducts.length)
  // console.log(cartCtx.totalAmount)
  // console.log((cartCtx.totalDiscountAmount.toFixed(0)))
  // console.log(cartCtx.totalDeliveryCharges)
  if(cartProducts.length>0){
  return (
    <React.Fragment>
      <div className={classes['main-container']}>
    <div className={classes["cart-flex-container"]}>
      <div className={classes["product-list-box"]}>
        <div className={classes["product-list-header"]}>My Cart({cartProducts.length})</div>
        <div className={classes["horizontal-line"]}></div>
        {
          cartProducts.map((product)=>{
            return <CartlistItem
            key={product.product_id}
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
          {/* <Route path="cart/checkout">
              <Checkout />
            </Route> */}

        <div className={classes["place-order-section"]}>
          <Link to='cart/checkout'><button className={classes["order-button"]}>Place Order</button></Link>
        </div>
      </div>

      <CartSubtotal/>
    </div></div>
    <Footer/></React.Fragment>
  );
}
else{
  return <React.Fragment><div className={classes['empty-cart']}><p style={{fontWeight:'900',fontSize:'x-large'}}>Oops, You forgot to add Products to cart</p></div><Footer/></React.Fragment>
}
};


export default Cart;
