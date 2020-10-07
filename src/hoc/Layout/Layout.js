import React, { useState } from "react";
import PropTypes from "prop-types";

import classes from './Layout.css';

import Toolbar from '../../components/Navigation/Toolbar/Toolbar'
import SideDrawer from '../../components/Navigation/SideDrawer/SideDrawer';

const Layout = ({ children }) => {
  const [ showSidebar, setShowSidebar] = useState(false);

  const handleSidebar = () => setShowSidebar(false);

  const handleToggleSideDrawer = () => setShowSidebar(!showSidebar)

  return (
    <div className={classes.Layout}>
      <Toolbar handleToggleSideDrawer={handleToggleSideDrawer}/>
      <SideDrawer open={showSidebar} closed={handleSidebar} />
      <main>{children}</main>
    </div>
  );
}

Layout.propTypes = {
  children: PropTypes.node
}

export default Layout;
