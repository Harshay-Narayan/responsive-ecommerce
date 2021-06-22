import React from "react";
import ReactDOM from "react-dom";
import classes from "./Modal.module.css";

const Backdrop = () => {
  return <div className={classes.backdrop}></div>;
};

const Overlay = () => {
  return (
    <div className={classes.modal}>
      <h1>Modal Heading</h1>
      <p>This is the Modal Body </p>
      <button className={classes.button}>Ok</button>
    </div>
  );
};

const Modal = () => {
  return (
    <React.Fragment>
      {ReactDOM.createPortal(
        <Backdrop />,
        document.getElementById("backdrop-root")
      )}
      ;
      {ReactDOM.createPortal(
        <Overlay />,
        document.getElementById("overlay-root")
      )}
      ;
    </React.Fragment>
  );
};
export default Modal;
