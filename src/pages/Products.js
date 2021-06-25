import React from "react";
import ProductCards from "../components/UI/ProductCards";
import classes from "./Products.module.css";
import dropdown from "../assets/dropdown.svg";

const Products = () => {
  return (
    <React.Fragment>
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
          <li>Clothing</li>
          <li>Electronics</li>
          <li>Clothing</li>
          <li>Electronics</li>
          <li>Clothing</li>
          <li>Electronics</li>
          <li>Clothing</li>
          <li>Electronics</li>
          <li>Clothing</li>
          <li>Electronics</li>
        </ul>
      </div>
        </div>
      </div>
      
      <div className={classes["products"]}>
        <ProductCards />
        <ProductCards />
        <ProductCards />
        <ProductCards />
        <ProductCards />
        <ProductCards />
        <ProductCards />
      </div>
    </React.Fragment>
  );
};

export default Products;
