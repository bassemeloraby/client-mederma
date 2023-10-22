import React from "react";
import Contact from "./Contact";


const Footer = () => (
  <nav className=" navbar  navbar-expand-lg bg-primary navbar-dark justify-content-center d-flex">
    <div className="footer-copyright text-center py-3 text-light ">
      © 2023 Copyright:
      <a className="text-light" href="https://mdbootstrap.com/">
        {" "}
        MDBootstrap.com
      </a>
      <Contact/>
    </div>
  </nav>
);

export default Footer;
