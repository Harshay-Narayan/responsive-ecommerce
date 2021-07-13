import React,{useContext} from "react";
import CartContext from "../../store/cart-context";
import classes from './CartSubtotal.module.css'

const CartSubtotal = () => {
    const cartCtx = useContext(CartContext)
    const totalAmount = cartCtx.totalAmount;
    const totalDiscountAmount = cartCtx.totalDiscountAmount.toFixed(0);
    const totalDeliveryCharges = cartCtx.totalDeliveryCharges;
    const totalAmountToBePaid = totalAmount - totalDiscountAmount + totalDeliveryCharges;
    let freeDelivery;
    if(totalDeliveryCharges === 0){
        freeDelivery = true;
    }
  return (
    <div className={classes["sub-total-box"]}>
      <div className={classes["sub-total-header"]}>Price Details</div>
      <div className={classes["horizontal-line"]}></div>
      <div className={classes.subtotal}>
        <span>Price</span>
        <span className={classes["total-amount"]}>{totalAmount}</span>
      </div>
      <div className={classes["discount-amount"]}>
        <span>Discounts</span>
        <span className={classes["discount-value"]}>{totalDiscountAmount}</span>
      </div>
      <div className={classes["delivery-charges"]}>
        <span>Delivery Charges</span>
        <span className={freeDelivery?classes["free-delivery"]:''}>{freeDelivery ?'FREE': totalDeliveryCharges}</span>
      </div>
      <div className={classes.total}>
        <span>Total</span>
        <span className={classes["total-value"]}>{totalAmountToBePaid}</span>
      </div>

      <div className={classes["final-purchase-message"]}>
        You will save <span className={classes["total-value"]}>{totalDiscountAmount}</span> on
        this order.
      </div>
    </div>
  );
};

export default CartSubtotal;
