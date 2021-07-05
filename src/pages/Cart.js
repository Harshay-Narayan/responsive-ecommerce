import React from "react";
import classes from "./Cart.module.css";
const Cart = () => {
  return (
    <div className={classes["cart-flex-container"]}>
      
      <div className={classes["product-list-box"]}>
        <div className={classes["product-list-header"]}>
          My Cart(2)
        </div>
        <div className={classes['horizontal-line']}></div>
        <div className={classes['product-list-items']}>
        <div className={classes["image-container"]}>
          <img src="/product-images/watch.jpg" alt="Product" />
        </div>
        <div>Titan</div>
        <div>ADIDAS Elate M Running Shoes For Men</div>
        <div className={classes.prices}>
          <span className={classes["current-price"]}>709</span>
          <span className={classes["old-price"]}>825</span>
          <span className={classes.discount}>15</span>
        </div>
        <div className={classes["cart-footer"]}>
          <form>
            <button className={classes['form-control-button']}>-</button>
            <input type="number" max="5" min="0" defaultValue="1" className={classes.input}/>
            <button className={classes['form-control-button']}>+</button>
          </form>
          <div className={classes.remove}>remove</div>
        </div>
      </div>


      <div className={classes['product-list-items']}>
        <div className={classes["image-container"]}>
          <img src="/product-images/watch.jpg" alt="Product" />
        </div>
        <div>Titan</div>
        <div>ADIDAS Elate M Running Shoes For Men</div>
        <div className={classes.prices}>
          <span className={classes["current-price"]}>709</span>
          <span className={classes["old-price"]}>825</span>
          <span className={classes.discount}>15</span>
        </div>
        <div className={classes["cart-footer"]}>
          <form>
            <button className={classes['form-control-button']}>-</button>
            <input type="number" max="5" min="0" defaultValue="1" className={classes.input}/>
            <button className={classes['form-control-button']}>+</button>
          </form>
          <div className={classes.remove}>remove</div>
        </div>
      </div>




      <div className={classes['place-order-section']}>
        <button className={classes['order-button']}>Place Order</button>
        </div>
      </div>

      <div className={classes["sub-total-box"]}>
        <div className={classes['sub-total-header']}>Price Details</div>
        <div className={classes['horizontal-line']}></div>
        <div className={classes.subtotal}><span>Price</span><span className={classes['total-amount']}>709</span></div>
        <div className={classes['discount-amount']}><span>Discounts</span><span className={classes['discount-value']}>115</span></div>
        <div className={classes['delivery-charges']}><span>Delivery Charges</span><span className={classes['free-delivery']}>FREE</span></div>
        <div className={classes.total}><span>Total</span><span className={classes['total-value']}>765</span></div>
        
        <div className={classes['final-purchase-message']}>You will save <span className={classes['discount-value']}>115</span> on this order.</div>
      </div>
    </div>
  );
};

export default Cart;
