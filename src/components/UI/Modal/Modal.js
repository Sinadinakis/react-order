import React from "react";
import PropTypes from "prop-types";
// CSS
import classes from "./Modal.css";
// Components
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

Modal.propTypes = {
  children: PropTypes.node,
  closeModal: PropTypes.func,
  show: PropTypes.bool,
}

export default Modal;
