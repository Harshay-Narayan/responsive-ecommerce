import React from 'react'
import dropdown from "../../assets/dropdown.svg";
import classes from './ProductHeader.module.css'

const ProductHeader = () => {
    return (
        <div className={classes["dropdown-container"]}>
        <div className={classes["product-category"]}>
          Product Category
          <img
            className={classes["dropdown-icon"]}
            src={dropdown}
            alt="issue"
          />
          <div className={classes["category-list"]}>
            <ul>
              <li>Fashion</li>
              <li>Electronics</li>
              <li>Mobile</li>
              <li>Books</li>
            </ul>
          </div>
        </div>
      </div>
    )
}

export default ProductHeader


