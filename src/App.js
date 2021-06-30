import "./App.css";
import React from "react";
import { Route } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Modal from "./components/UI/Modal";
import Products from "./pages/Products";
import Cart from "./pages/Cart";

function App() {
  return (
    <React.Fragment>
      <Header />
      {/* <Modal/> */}
      <section>
        <Route path="/products" exact>
        <Products/>
        </Route>
        <Route path="/cart">
        <Cart />
        </Route>
      </section>
      {/* <Footer/> */}
    </React.Fragment>
  );
}

export default App;
