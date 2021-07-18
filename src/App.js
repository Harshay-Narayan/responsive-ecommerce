import "./App.css";
import React from "react";
import { Route, Redirect, Switch } from "react-router-dom";
import Header from "./components/Header";
// import Footer from "./components/Footer";
import Products from "./pages/Products";
import Cart from "./pages/Cart";
import Home from "./pages/Home";
import CartProvider from "./store/CartProvider";
import Checkout from "./pages/Checkout";
import NotFound from "./pages/NotFound";

function App() {

  return (
    <React.Fragment>
      <CartProvider>
        <Header />
        <section>
          <Switch>
            <Route path="/" exact>
              <Redirect to="/home" />
            </Route>
            <Route path="/home">
              <Home />
            </Route>
            <Route path="/products">
              <Products />
            </Route>
            <Route path="/cart/checkout">
             <Checkout />
             </Route>
            <Route path="/cart">
              <Cart/>
            </Route>
            <Route><NotFound/></Route>
          </Switch>
        </section>
      </CartProvider>
    </React.Fragment>
  );
}

export default App;
