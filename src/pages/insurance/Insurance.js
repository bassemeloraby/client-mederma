import React from "react";
import YouTube from "react-youtube";
import Nav from 'react-bootstrap/Nav';
// import { Link } from "react-router-dom";
import insc from "../../images/inscTel.png";
import { insuranceLinks } from "../../data";
// import Zoom from "react-zoom-image-hover";
function Insurance() {
  return (
    <section className="insurance">
    <Nav
  >
{insuranceLinks.map((link, index) =>  <Nav.Item>
    <Nav.Link href={link.link}  target="_blank">{link.text}</Nav.Link>
  </Nav.Item>)}
  </Nav>
      <section className="home-video">
        <YouTube videoId="7wX3Pnjecqc" />
      </section>
      <div className="d-flex justify-content-center">
        {" "}
        <img src={insc} alt="insurance"></img>
      </div>
      {/*<div>
        <Zoom height={500} width={830} zoomScale={3} src={insc} />
  </div>*/}
    </section>
  );
}

export default Insurance;