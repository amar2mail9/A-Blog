import React from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";

export default function Layout(props) {
  return (
    <>
      <Navbar></Navbar>
      {props.children}
      <Footer />
    </>
  );
}
