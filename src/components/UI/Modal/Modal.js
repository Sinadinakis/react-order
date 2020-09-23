import React from "react";

import classes from "./Modal.css";

import Backdrop from "../Backdrop/Backdrop";

const Modal = ({ children, show, closeModal }) => (
  <>
    <Backdrop show={show} clicked={closeModal} />
    <div
      className={classes.Modal}
      style={{
        transform: show ? "translateY(0)" : "translateY(-100vh)",
        opacity: show ? "1" : "0",
      }}
    >
      <button
        type="button"
        className={classes.CloseButton}
        onClick={closeModal}
      >
        ×
      </button>
      {children}
    </div>
  </>
);

export default Modal;
