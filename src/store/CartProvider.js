import React, { useReducer } from "react";
import CartContext from "./cart-context";

const defaultCartState = {
  products: [],
  totalAmount: 0,
  totalDiscountAmount: 0,
  totalDeliveryCharges: 0,
};
const cartReducer = (state, action) => {
  if (action.type === "ADD") {
    const products = state.products.concat(action.product)
    console.log(products)
    return {products:products}
  }
  if (action.type === "REMOVE") {
  }
  if (action.type === "CLEAR") {
    return defaultCartState;
  }
  return defaultCartState;
};

const CartProvider = (props) => {
  const [cartState, dispatchCartAction] = useReducer(
    cartReducer,
    defaultCartState
  );

  const addToCartHandler = (product) => {
    console.log(product);
    dispatchCartAction({ type: "ADD", product: product });
  };

  const removeFromCartHandler = (product_id) => {
    dispatchCartAction({ type: "REMOVE", product_id: product_id });
  };

  const clearCartHandler = () => {
    dispatchCartAction({ type: "CLEAR" });
  };

  const cartContext = {
    products:cartState.products,
    totalAmount:cartState.totalAmount,
    totalDiscountAmount:cartState.totalDiscountAmount,
    totalDeliveryCharges:cartState.totalDeliveryCharges,
    addToCart: addToCartHandler,
    removeFromCart: removeFromCartHandler,
    clearCart: clearCartHandler,
  };

  return (
    <CartContext.Provider value={cartContext}>
      {props.children}
    </CartContext.Provider>
  );
};
export default CartProvider;
