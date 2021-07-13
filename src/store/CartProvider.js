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
    const updatedProducts = state.products.concat(action.product);
    const updatedTotalAmount = state.totalAmount + action.product.product_old_price;
    const updatedDiscountAmount = state.totalDiscountAmount + action.product.product_old_price * (action.product.product_discount)/100; 
    const updatedDeliveryCharges = state.totalDeliveryCharges + action.product.product_delivery_charges;
    console.log(updatedProducts)
    return {products:updatedProducts,totalAmount:updatedTotalAmount,totalDiscountAmount:updatedDiscountAmount,totalDeliveryCharges:updatedDeliveryCharges}
  }
  if (action.type === "REMOVE") {
    const indexToBeRemoved = state.products.findIndex(product=>product.product_id === action.product_id);
    const updatedProducts = state.products.filter(product=>product.product_id!==action.product_id);
    const updatedTotalAmount = state.totalAmount - state.products[indexToBeRemoved].product_old_price*state.products[indexToBeRemoved].product_quantity_in_cart;
    const updatedDiscountAmount = state.totalDiscountAmount - state.products[indexToBeRemoved].product_quantity_in_cart*(state.products[indexToBeRemoved].product_old_price * (state.products[indexToBeRemoved].product_discount)/100);
    const updatedDeliveryCharges = state.totalDeliveryCharges - state.products[indexToBeRemoved].product_delivery_charges;
    return {products:updatedProducts,totalAmount:updatedTotalAmount,totalDiscountAmount:updatedDiscountAmount,totalDeliveryCharges:updatedDeliveryCharges}
  }
  if(action.type==='CHANGE_QUANTITY'){
    console.log("CHANGE QUANTITY")
    if(action.operator==='increase' && action.product_id){
      const indexQuantityToBeChanged = state.products.findIndex(product=>product.product_id === action.product_id);
      if(state.products[indexQuantityToBeChanged].product_quantity_in_cart<state.products[indexQuantityToBeChanged].product_stock_quantity){
        const updatedQuantity = state.products[indexQuantityToBeChanged].product_quantity_in_cart + 1;
        const updatedProductItem = {...state.products[indexQuantityToBeChanged],product_quantity_in_cart:updatedQuantity};
        const updatedProducts = [...state.products];
        updatedProducts[indexQuantityToBeChanged] = updatedProductItem;
        const updatedTotalAmount = state.totalAmount + state.products[indexQuantityToBeChanged].product_old_price;
        const updatedDiscountAmount = state.totalDiscountAmount + state.products[indexQuantityToBeChanged].product_old_price * (state.products[indexQuantityToBeChanged].product_discount)/100;
        return {products:updatedProducts, totalAmount:updatedTotalAmount,totalDiscountAmount:updatedDiscountAmount, totalDeliveryCharges:state.totalDeliveryCharges}
      }
      else{
        return {products:state.products, totalAmount:state.totalAmount,totalDiscountAmount:state.totalDiscountAmount, totalDeliveryCharges:state.totalDeliveryCharges}
      }
      
    }
     if(action.operator==='decrease' && action.product_id){
      const indexQuantityToBeChanged = state.products.findIndex(product=>product.product_id === action.product_id);
      if(state.products[indexQuantityToBeChanged].product_quantity_in_cart>1){
      const updatedQuantity = state.products[indexQuantityToBeChanged].product_quantity_in_cart - 1;
      const updatedProductItem = {...state.products[indexQuantityToBeChanged],product_quantity_in_cart:updatedQuantity};
      const updatedProducts = [...state.products];
      updatedProducts[indexQuantityToBeChanged] = updatedProductItem;
      const updatedTotalAmount = state.totalAmount - state.products[indexQuantityToBeChanged].product_old_price;
      const updatedDiscountAmount = state.totalDiscountAmount - state.products[indexQuantityToBeChanged].product_old_price * (state.products[indexQuantityToBeChanged].product_discount)/100;
      return {products:updatedProducts, totalAmount:updatedTotalAmount,totalDiscountAmount:updatedDiscountAmount, totalDeliveryCharges:state.totalDeliveryCharges}
    }
    else{
      return {products:state.products, totalAmount:state.totalAmount,totalDiscountAmount:state.totalDiscountAmount, totalDeliveryCharges:state.totalDeliveryCharges}
    }
     }
      
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

  const quantityChangeHandler=(operator,product_id)=>{
    dispatchCartAction({type:'CHANGE_QUANTITY',operator:operator,product_id:product_id})
  }

  const cartContext = {
    products:cartState.products,
    totalAmount:cartState.totalAmount,
    totalDiscountAmount:cartState.totalDiscountAmount,
    totalDeliveryCharges:cartState.totalDeliveryCharges,
    addToCart: addToCartHandler,
    removeFromCart: removeFromCartHandler,
    clearCart: clearCartHandler,
    changeQuantity:quantityChangeHandler
  };

  return (
    <CartContext.Provider value={cartContext}>
      {props.children}
    </CartContext.Provider>
  );
};
export default CartProvider;
