import React from "react";
import classes from "./Footer.module.css";

const Footer = () => {
  return (
    <footer className={classes.footer}>
      <div className={classes["left-section"]}>
        <p className={classes["list-heading"]}>policy</p>
        <ul>
          <li>Return Policy</li>
          <li>Terms Of Use</li>
          <li>Security</li>
          <li>Privacy</li>
          <li>Sitemap</li>
          <li>EPR Compliance</li>
        </ul>
      </div>
      <div className={classes["middle-section"]}>
        <p className={classes["list-heading"]}>social</p>
        <ul>
          <li>Facebook</li>
          <li>Twitter</li>
          <li>Youtube</li>
        </ul>
      </div>
      <div className={classes["right-section"]}>
        <p className={classes["list-heading"]}>social</p>
        <ul>
          <li>Facebook</li>
          <li>Twitter</li>
          <li>Youtube</li>
        </ul>
      </div>
      <div className={classes["right-section"]}>
        <p className={classes["list-heading"]}>social</p>
        <ul>
          <li>Facebook</li>
          <li>Twitter</li>
          <li>Youtube</li>
        </ul>
      </div>
      <div className={classes.line}></div>
      
      <div className={classes.foot}>&copy; 2017-2021 Shopkart.com</div>
    </footer>
    
  );
};

export default Footer;
