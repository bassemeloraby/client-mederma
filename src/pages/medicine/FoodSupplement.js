import React, { Fragment } from "react";
import vit from "../../images/vit.jpg";
import multiVit from "../../images/multiVit.jpg";
import Zoom from "react-zoom-image-hover";
function FoodSupplement() {
  return (
    <Fragment>
      <div className="container">
        <section className="home">
          <section className="home-header">
            <h2 className="">Welcome to my FoodSupplement</h2>
          </section>
        </section>
        <div className="d-flex justify-content-center">
          {" "}
          <img src={vit} alt="insurance"></img>
        </div>
        <div>
          <Zoom height={500} width={830} zoomScale={3} src={multiVit} />
        </div>
      </div>
    </Fragment>
  );
}

export default FoodSupplement;
