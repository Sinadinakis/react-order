import React from "react";
import PropTypes from 'prop-types';
//CSS
import classes from "./Backdrop.css";

const Backdrop = ({ show, clicked }) => (
  show ? <div className={classes.Backdrop} onClick={clicked}></div> : null);

Backdrop.propTypes = {
  clicked: PropTypes.func,
  show: PropTypes.bool,
}  

export default Backdrop;
