import React, { useEffect,useState } from "react";
import ProductCards from "../components/UI/ProductCards";
import classes from "./Products.module.css";
import dropdown from "../assets/dropdown.svg";
import useHttp from "../store/use-http";


const Products = (props) => {
  const [productList, setProductList] = useState([])
  
const transformData = (products) => {
  const products_array = [];
  for (const key in products) {
    products_array.push({
      product_id: key,
      product_brand: products[key].brand,
      product_name: products[key].name,
      product_description: products[key].description,
      product_current_price: products[key].current_price,
      product_old_price: products[key].old_price,
      product_discount: products[key].discount,
      product_category: products[key].category,
      product_warranty: products[key].warranty,
      product_quantity: products[key].stock_quantity,
      product_image_location: products[key].image_location,
    });
  }
  
  setProductList(products_array)
  
};
 
  const { isLoading, hasError, sendRequest } = useHttp(transformData);

  useEffect(() => {
    console.log("Use Effect Executed");
    sendRequest({
      url: "https://responsive-react-ecommerce-default-rtdb.firebaseio.com/products.json",
    });
  }, [sendRequest]);

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
              <li>Fashion</li>
              <li>Electronics</li>
              <li>Mobile</li>
              <li>Books</li>
            </ul>
          </div>
        </div>
      </div>

      <div className={classes["products"]}>
        {productList.map((products) => {
          return <ProductCards
            onShowCartModal={props.onShowCartModal}
            brand={products.product_brand}
            name={products.product_name}
            price={products.product_current_price}
            image_location={products.product_image_location}
          />;
        })}
        
      </div>
    </React.Fragment>
  );
};

export default Products;
