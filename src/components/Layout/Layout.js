import React from "react";
import PropTypes from "prop-types";

import classes from './Layout.css';

import Toolbar from '../Navigation/Toolbar/Toolbar'

const Layout = ({ children }) => (
  <div className={classes.Layout}>
    <header><Toolbar /></header>
    <main>{children}</main>
  </div>
);

Layout.propTypes = {
  children : PropTypes.node
}

export default Layout;
