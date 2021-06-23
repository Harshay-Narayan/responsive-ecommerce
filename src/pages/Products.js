import React from "react";
import ProductCards from "../components/UI/ProductCards";
import classes from './Products.module.css'

const Products = () => {
  return (
    <div className={classes["products"]}>
      <ProductCards />
      <ProductCards />
      <ProductCards />
      <ProductCards />
      <ProductCards />
      <ProductCards />
      <ProductCards />
    </div>
  );
};

export default Products;
