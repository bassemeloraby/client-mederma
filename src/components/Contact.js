import React from "react";
import { BsWhatsapp } from "react-icons/bs";

const Contact = () => {
  return (
    <div className="d-flex">
      <h5 className="me-2">contac us at</h5>
      <a
        className="text-light"
        href="https://wa.me/+966560254327"
        target="_blank"
        rel="noreferrer"
      >
        <BsWhatsapp className="bg-success fs-5"/>
      </a>
    </div>
  );
};

export default Contact;
