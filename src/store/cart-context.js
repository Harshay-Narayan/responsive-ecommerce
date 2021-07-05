import React from 'react'

const CartContext = React.createContext({
    products:[],
    totalAmount:0,
    totalDiscountAmount:0,
    totalDeliveryCharges:0,
    // isAddToCartButtonDisabled:false,
    addToCart:(product)=>{},
    removeFromCart:(product_id)=>{},
    clearCart:()=>{}
})

export default CartContext;