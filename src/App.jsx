import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "remixicon/fonts/remixicon.css";

// My Components
import Home from "./Components/Page/Home/Home";
import AboutUs from "./Components/Page/AboutUs";
import ContactUs from "./Components/Page/ContactUs";

export default function () {
  // Sate Or Variable

  // Function Or Mrthod

  // Return Statements
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about-us" element={<AboutUs />} />
        <Route path="/contact-us" element={<ContactUs />} />
      </Routes>
    </BrowserRouter>
  );
}
