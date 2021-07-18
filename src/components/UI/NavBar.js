import React from "react";
import classes from "./NavBar.module.css";
import hamburger from "../../assets/hamburger.svg";
import {useState} from 'react';
import CartIcon from '../svg/CartIcon'
import { NavLink } from "react-router-dom";

const NavBar = () => {
  const [showLinks, setShowLinks] = useState(false);
  
  const hamburgerClickHandler=()=>{
    setShowLinks(showLinks=>!showLinks)
  }
  
  return (
    <nav className={classes.navbar}>
      <div className={classes.leftside}>
        <p className={classes["logo-text"]}>Shopkart</p>
        <img src={hamburger} alt="error" className={classes["hamburger-image"]} onClick={hamburgerClickHandler}/>
      </div>
      <div className={`${!showLinks?classes.rightside:classes.rightsidelarge}`}>
        <div className={classes.links}>
          <NavLink to="/home" activeClassName={classes.active} onClick={hamburgerClickHandler}>Home</NavLink>
          <NavLink to="/products" activeClassName={classes.active} onClick={hamburgerClickHandler}>Product</NavLink>
          <a href="#">About</a>
          <a href="#">Contact</a>
          <NavLink to="/cart" onClick={hamburgerClickHandler}>
           <div className={classes['cart-image']}><CartIcon /></div>
          </NavLink>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
