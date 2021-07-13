import React from "react";
import Footer from "../components/Footer";
import classes from "./Home.module.css";
const Home = () => {
  return (
    <React.Fragment>
      <div className={classes["main-container"]}>
        <img src="https://source.unsplash.com/1600x900/?shopping,ecommerce" />
      </div>
      <Footer />
    </React.Fragment>
  );
};

export default Home;
