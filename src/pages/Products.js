import React, { useCallback, useEffect, useState } from "react";
import ProductCards from "../components/UI/ProductCards";
import classes from "./Products.module.css";
import useHttp from "../customHooks/use-http";
import ProductDetailsModal from "../components/Cart/ProductDetailsModal";
import ProductHeader from "../components/UI/ProductHeader";
import Spinner from "../components/UI/Spinner";

const Products = () => {
  const [showProductDetailsModal, setShowProductDetailsModal] = useState(null);
  const [productList, setProductList] = useState([]);

  const showProductDetailsModalHandler = (currentProductObject) => {
    setShowProductDetailsModal(currentProductObject);
  };

  const cancelHandler = () => {
    setShowProductDetailsModal(false);
  };

  const transformData = useCallback((products) => {
    const products_array = [];
    for (const key in products) {
      products_array.push({
        key: key,
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
        product_delivery_charges: products[key].delivery_charges,
      });
      console.log(products_array);
    }

    setProductList(products_array);
  }, []);

  const { isLoading, hasError, sendRequest } = useHttp(transformData);

  useEffect(() => {
    console.log("Use Effect Executed");
    sendRequest({
      url: "https://responsive-react-ecommerce-default-rtdb.firebaseio.com/products.json",
    });
  }, [sendRequest]);

  return (
    <React.Fragment>
      <ProductHeader />
      {showProductDetailsModal && (
        <ProductDetailsModal
          onClose={cancelHandler}
          id={showProductDetailsModal.id}
          brand={showProductDetailsModal.brand}
          description={showProductDetailsModal.description}
          price={showProductDetailsModal.price}
          old_price={showProductDetailsModal.price}
          image_location={showProductDetailsModal.image_location}
          discount={showProductDetailsModal.discount}
          warranty={showProductDetailsModal.warranty}
          quantity={showProductDetailsModal.quantity}
          delivery_charges={showProductDetailsModal.delivery_charges}
        />
      )}
      {!isLoading && !hasError && (
        <div className={classes["products"]}>
          {productList.map((products) => {
            return (
              <ProductCards
                onShowProductDetailsModal={showProductDetailsModalHandler}
                key={products.product_id}
                id={products.product_id}
                brand={products.product_brand}
                name={products.product_name}
                description={products.product_description}
                price={products.product_current_price}
                old_price={products.product_old_price}
                image_location={products.product_image_location}
                discount={products.product_discount}
                warranty={products.product_warranty}
                quantity={products.product_quantity}
                delivery_charges={products.product_delivery_charges}
              />
            );
          })}
        </div>
      )}
      {isLoading && <Spinner />}
      {!isLoading && hasError && (
        <p style={{ color: "#B00020", textAlign: "center" }}>
          Oops, Something went wrong
        </p>
      )}
    </React.Fragment>
  );
};

export default Products;
