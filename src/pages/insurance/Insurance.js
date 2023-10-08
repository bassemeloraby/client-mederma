import React from "react";
import Nav from "react-bootstrap/Nav";
import insc from "../../images/inscTel.png";
import { insuranceLinks } from "../../data";
function Insurance() {
  return (
    <section className="">
      <Nav  className="bg-dark mb-2">
        {insuranceLinks.map((link, index) => (
          <Nav.Item key={index}>
            <Nav.Link href={link.link} target="_blank">
              {link.text}
            </Nav.Link>
          </Nav.Item>
        ))}
      </Nav>
      <div className="ratio ratio-16x9">
        <iframe
          src="https://www.youtube.com/embed/7wX3Pnjecqc"
          title="GlobeMed i care جلوبميد"
          allowFullScreen
        ></iframe>
      </div>

      <div className="d-flex justify-content-center">
        {" "}
        <img src={insc} alt="insurance"></img>
      </div>
    </section>
  );
}

export default Insurance;
