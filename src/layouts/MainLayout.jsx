import React from "react";
import Navbar from "../shared components/Navbar";
import { Outlet } from "react-router";
import Footer from "../shared components/Footer";

const MainLayout = () => {
  return (
    <div>
      <Navbar></Navbar>

      <Outlet></Outlet>

      <Footer></Footer>
    </div>
  );
};

export default MainLayout;
