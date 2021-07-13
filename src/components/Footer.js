import React from "react";
import FacebookIcon from "../assets/FacebookIcon";
import InstagramIcon from "../assets/InstagramIcon";
import TwitterIcon from "../assets/TwitterIcon";
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
        <p className={classes["list-heading"]}>Help</p>
        <ul>
          <li>Payments</li>
          <li>Shipping</li>
          <li>Cancellation & Returns</li>
          <li>FAQ</li>
          <li>Report Infringement</li>
        </ul>
      </div>
      <div className={classes["right-section"]}>
        <p className={classes["list-heading"]}>social</p>
        <ul>
          <li className={classes.icon}><FacebookIcon/>Facebook</li>
          <li className={classes.icon}><TwitterIcon />Twitter</li>
          <li className={classes.icon}><InstagramIcon/>Instagram</li>
        </ul>
      </div>
      <div className={classes["right-section"]}>
        <p className={classes["list-heading"]}>Let us Help You</p>
        <ul>
          <li>Covid-19</li>
          <li>100% Purchase Protection</li>
          <li>App Download</li>
        </ul>
      </div>
      <div className={classes.line}></div>
      
      <div className={classes.foot}>&copy; 2017-2021 Shopkart.com</div>
    </footer>
    
  );
};

export default Footer;
