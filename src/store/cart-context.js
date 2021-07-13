import React from 'react'

const CartContext = React.createContext({
    products:[],
    totalAmount:0,
    totalDiscountAmount:0,
    totalDeliveryCharges:0,
    addToCart:(product)=>{},
    removeFromCart:(product_id)=>{},
    changeQuantity:()=>{},
    clearCart:()=>{}
})

export default CartContext;