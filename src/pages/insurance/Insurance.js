import React from "react";
import Nav from "react-bootstrap/Nav";
import insc1 from "../../images/inscTel-1.png";
import insc2 from "../../images/inscTel-2.png";
import insc3 from "../../images/inscTel-3.png";
import insc4 from "../../images/inscTel-4.png";
import insc5 from "../../images/inscTel-5.png";
import { insuranceLinks } from "../../data";

const inscImages = [insc1, insc2, insc3, insc4, insc5];

function Insurance() {
  return (
    <section>
      <div className="d-flex justify-content-center">
        <h3>Insurance</h3>{" "}
      </div>
      <Nav className="bg-light mb-2 ">
        {insuranceLinks.map((link, index) => (
          <Nav.Item key={index}>
            <Nav.Link href={link.link} target="_blank">
              {link.text}
            </Nav.Link>
          </Nav.Item>
        ))}
      </Nav>
      <div className="row">
        <span className="border m-3 bg-info border-black col-4">
          TOTAL CARE MACHINE TEL : 920014001
        </span>
        <span className="border m-3 bg-info border-black col-4">
          Wasfaty TEL : 920000932
        </span>
      </div>

      <div className="ratio ratio-16x9 mt-3" style={{ width: "40rem" }}>
        <iframe
          src="https://www.youtube.com/embed/7wX3Pnjecqc"
          title="GlobeMed i care جلوبميد"
          allowFullScreen
        ></iframe>
      </div>

      <div className="d-flex justify-content-around flex-wrap">
        {inscImages.map((ins, i) => (
          <img src={ins} alt="insurance2" key={i} />
        ))}
      </div>
    </section>
  );
}

export default Insurance;
