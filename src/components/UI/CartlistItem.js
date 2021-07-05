import React from 'react'
import classes from './CartlistItem.module.css'

const CartlistItem = (props) => {
    return (
        <div className={classes['product-list-items']}>
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
          <form>
            <button className={classes['form-control-button']}>-</button>
            <input type="number" max="5" min="0" defaultValue="1" className={classes.input}/>
            <button className={classes['form-control-button']}>+</button>
          </form>
          <div className={classes.remove}>remove</div>
        </div>
      </div>

    )
}

export default CartlistItem
