import "./App.css";
import React,{useContext} from "react";
import { Route, Redirect, Switch } from "react-router-dom";
import Header from "./components/Header";
// import Footer from "./components/Footer";
import Modal from "./components/UI/Modal";
import Products from "./pages/Products";
import Cart from "./pages/Cart";
import Home from "./pages/Home";
import CartProvider from "./store/CartProvider";
import Checkout from "./pages/Checkout";


function App() {
  return (
    <React.Fragment>
      <CartProvider>
        <Header />
        {/* <Modal/> */}
        <section>
          <Switch>
            <Route path="/" exact>
              <Redirect to="/home" />
            </Route>
            <Route path="/home" exact>
              <Home />
            </Route>
            <Route path="/products" exact>
              <Products />
            </Route>
            <Route path="/cart" exact>
              <Cart />
            </Route>
            <Route path="/cart/checkout">
              <Checkout />
            </Route>
          </Switch>
        </section>
      </CartProvider>
    </React.Fragment>
  );
}

export default App;
