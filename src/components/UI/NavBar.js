import React from "react";
import cartIcon from "../../assets/cartIcon.svg";
import classes from "./NavBar.module.css";
import hamburger from "../../assets/hamburger.svg";
import {useState} from 'react';
import logo from '../../assets/logo.jpg'

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
    // <header className={classes.header}>
    //   <nav>
    //     <ul className={classes.list}>
    //       <li>
    //         <img src={cartIcon} alt="error" className={classes["cart-image"]} />
    //       </li>
    //       <li>Contact</li>
    //       <li>About</li>
    //       <li>Product</li>
    //       <li>Home</li>
    //       <li><img src={hamburger} alt="error" className={classes["cart-image"]} /></li>
    //     </ul>
    //   </nav>

    // </header>

    <nav className={classes.navbar}>
      <div className={classes.leftside}>
        <img src={logo} alt="logo" className={classes.logo}/>
        <img src={hamburger} alt="error" className={classes["hamburger-image"]} onClick={hamburgerClickHandler}/>
      </div>
      <div className={`${!showLinks?classes.rightside:classes.rightsidelarge}`}>
        <div className={classes.links}>
          <a href="#">Home</a>
          <a href="#">Product</a>
          <a href="#">About</a>
          <a href="#">Contact</a>
          <a href="#">
            <img src={cartIcon} alt="error" className={classes["cart-image"]} />
          </a>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
