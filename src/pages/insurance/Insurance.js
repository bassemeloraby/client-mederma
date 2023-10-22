import React from "react";
import YouTube from "react-youtube";
import Nav from "react-bootstrap/Nav";
// import { Link } from "react-router-dom";
import insc1 from "../../images/inscTel-1.png";
import insc2 from "../../images/inscTel-2.png";
import insc3 from "../../images/inscTel-3.png";
import insc4 from "../../images/inscTel-4.png";
import insc5 from "../../images/inscTel-5.png";
import { insuranceLinks } from "../../data";
// import Zoom from "react-zoom-image-hover";
function Insurance() {
  return (
    <section className="">
      <Nav className="bg-light mb-2 ">
        {insuranceLinks.map((link, index) => (
          <Nav.Item key={index}>
            <Nav.Link href={link.link} target="_blank">
              {link.text}
            </Nav.Link>
          </Nav.Item>
        ))}
      </Nav>
<<<<<<< HEAD
      <section className="home-video">
        <YouTube videoId="7wX3Pnjecqc" />
      </section>
=======
          <span>TOTAL CARE MACHINE TEL:920014001</span>
      <div className="ratio ratio-16x9">
        <iframe
          src="https://www.youtube.com/embed/7wX3Pnjecqc"
          title="GlobeMed i care جلوبميد"
          allowFullScreen
        ></iframe>
      </div>

>>>>>>> 2777b36fb8d52a8dc2577f6cc61a6ad781d4be2b
      <div className="d-flex justify-content-around flex-wrap">
        {" "}
        <img src={insc1} alt="insurance1" className=""></img>
        <img src={insc2} alt="insurance2"></img>
        <img src={insc3} alt="insurance3"></img>
        <img src={insc4} alt="insurance4"></img>
        <img src={insc5} alt="insurance5"></img>
      </div>
      {/*<div>
        <Zoom height={500} width={830} zoomScale={3} src={insc} />
  </div>*/}
    </section>
  );
}

export default Insurance;
