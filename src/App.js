import "./App.css";
import React,{useState} from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Modal from "./components/UI/Modal";
import Products from "./pages/Products";
import CartModal from './components/Cart/CartModal'

function App() {
  const [showCartModal, setShowCartModal] = useState(false);
  const showCartModalHandler=()=>{
    setShowCartModal(true)
    console.log("set")
  }
  const cancelHandler=()=>{
    setShowCartModal(false)
  }
  return (
    <React.Fragment>
      <Header />
      {/* <Modal/> */}
      <section>
        <Products onShowCartModal={showCartModalHandler} onClose={cancelHandler}/>
      </section>
      {/* <Footer/> */}
      {showCartModal && <CartModal onClose={cancelHandler}/>}
    </React.Fragment>
  );
}

export default App;
