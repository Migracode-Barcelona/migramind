import React from "react";
import {Outlet} from "react-router-dom";
import Footer from "../../components/Footer";
import NavigationBar from "../../components/NavigationBar";

const Layout = () => {
  return (
    <>
      <NavigationBar />
      <Outlet />
      <Footer />
    </>
  );
};

export default Layout;