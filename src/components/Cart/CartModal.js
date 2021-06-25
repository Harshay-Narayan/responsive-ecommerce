import React from 'react'
import classes from './CartModal.module.css'
import watch from '../../assets/watch.jpg';

const CartModal = () => {
    return (
        <div className={classes['cart-modal-container']}>
            <div className={classes['image-container']}>
            <img src={watch} className={classes['main-image']}/>
            </div>
            <div className={classes['details-container']}>
                <div>Titan Watch</div>
                <div>LCS-8188 BLUE DIAL AND SILVER STRAP DAY & DATE FUNCTIONING WATCH FOR BOYS Analog Watch - For Men</div>
                <div>Special price</div>
                <div>₹314<span className={classes['old-price']}>₹1,799</span><span className={classes['discount']}>82% off</span></div>
                <div><span className={classes['warranty-text']}>Warranty</span><span className={classes['warranty']}>6 Months</span></div>
                <div><button>Add to Cart</button></div>
            </div>
        </div>
    )
}

export default CartModal;
