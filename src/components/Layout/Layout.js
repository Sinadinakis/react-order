import React from "react";

const Layout = (props) => (
  <>
    <header>{/* <Menu /> */}</header>
    <main>{props.children}</main>
  </>
);

export default Layout;
