import "./App.css";
import React from "react";
import { Route, Redirect } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Modal from "./components/UI/Modal";
import Products from "./pages/Products";
import Cart from "./pages/Cart";
import Home from "./pages/Home";
import CartProvider from "./store/CartProvider";

function App() {
  return (
    <React.Fragment>
      <CartProvider>
      <Header />
      {/* <Modal/> */}
      <section>
        <Route path="/" exact>
          <Redirect to="/home"/>
        </Route>
        <Route path="/home">
          <Home />
        </Route>
        <Route path="/products">
          <Products />
        </Route>
        <Route path="/cart">
          <Cart />
        </Route>
      </section>
      {/* <Footer/> */}
      </CartProvider>
    </React.Fragment>
  );
}

export default App;
