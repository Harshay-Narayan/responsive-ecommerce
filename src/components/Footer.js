import React from "react";
import classes from "./Footer.module.css";

const Footer = () => {
  return (
    <footer className={classes.footer}>
      <div className={classes["left-section"]}>
        <ul>
          <li className={classes["list-heading"]}>POLICY</li>
          <li>Return Policy</li>
          <li>Terms Of Use</li>
          <li>Security</li>
          <li>Privacy</li>
          <li>Sitemap</li>
          <li>EPR Compliance</li>
        </ul>
      </div><div className={classes["middle-section"]}>
        <ul>
          <li className={classes["list-heading"]}>SOCIAL</li>
          <li>Facebook</li>
          <li>Twitter</li>
          <li>Youtube</li>
        </ul>
      </div><div className={classes["right-section"]}>
        <ul>
          <li className={classes["list-heading"]}>SOCIAL</li>
          <li>Facebook</li>
          <li>Twitter</li>
          <li>Youtube</li>
        </ul>
      </div>
     <div className={classes.line}></div><div className={classes.foot}>
        <ul>
          <li className={classes["list-heading"]}>&copy; 2017-2021 Shopkart.com</li>
        </ul>
      </div>
    </footer>
  );
};

export default Footer;
