import React from "react";
import Contact from "./Contact";

const Footer = () => (
  <nav className=" fixed-bottom navbar  navbar-expand-lg bg-primary navbar-dark justify-content-center">
    <div className="footer-copyright text-center py-3 text-light ">
      <span> © 2023 Copyright</span>
      <Contact />
    </div>
  </nav>
);

export default Footer;
