import React from "react";
import classes from "./NavBar.module.css";
import hamburger from "../../assets/hamburger.svg";
import {useState} from 'react';
import CartIcon from '../svg/CartIcon'
import { Link } from "react-router-dom";

const NavBar = () => {
  const [showLinks, setShowLinks] = useState(false);
  
  const hamburgerClickHandler=()=>{
    if(showLinks){
      setShowLinks(false);
      console.log("set false");  
    }
    else{
      setShowLinks(true);
      console.log("set true")  
    }
  }
  return (
    <nav className={classes.navbar}>
      <div className={classes.leftside}>
        <p className={classes["logo-text"]}>Shopkart</p>
        <img src={hamburger} alt="error" className={classes["hamburger-image"]} onClick={hamburgerClickHandler}/>
      </div>
      <div className={`${!showLinks?classes.rightside:classes.rightsidelarge}`}>
        <div className={classes.links}>
          <Link to="/">Home</Link>
          <a href="/products">Product</a>
          <a href="#">About</a>
          <a href="#">Contact</a>
          <Link to="/cart">
           <div className={classes['cart-image']}><CartIcon /></div>
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
