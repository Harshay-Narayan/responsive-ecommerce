import React from "react";
import ReactDOM from "react-dom";
import classes from "./Modal.module.css";



const Backdrop = (props) => {
  return <div className={classes.backdrop} onClick={props.toggleRemoveItem}></div>;
};

const Overlay = (props) => {
  return (
    <div className={classes.modal}>
      <h1>{props.modalHeading}</h1>
      <p>{props.modalContent}</p>
      <button className={classes.button} onClick={props.onConfirm}>Ok</button>
    </div>
  );
};

const Modal = (props) => {
  return (
    <React.Fragment>
      {ReactDOM.createPortal(
        <Backdrop toggleRemoveItem={props.toggleRemoveItem}/>,
        document.getElementById("backdrop-root")
      )}
      
      {ReactDOM.createPortal(
        <Overlay modalHeading={props.heading} modalContent={props.content} onConfirm={props.onConfirm}/>,
        document.getElementById("overlay-root")
      )}
      
    </React.Fragment>
  );
};
export default Modal;
