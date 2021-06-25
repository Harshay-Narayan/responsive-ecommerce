import "./App.css";
import React from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Modal from "./components/UI/Modal";
import Products from "./pages/Products";
import CardModal from './components/Cart/CartModal'

function App() {
  return (
    <React.Fragment>
      <Header />
      {/* <Modal/> */}
      <section>
        <Products/>
      </section>
      {/* <Footer/> */}
      <CardModal />
    </React.Fragment>
  );
}

export default App;
