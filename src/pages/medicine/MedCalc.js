import React, { Fragment } from "react";
// import Zoom from "react-zoom-image-hover";
// import dose1 from "../../images/medicineImage/dose1.jpeg";
import dose2 from "../../images/medicineImage/dose2.jpeg";
import dose3 from "../../images/medicineImage/dose3.jpeg";

function MedCalc() {
  return (
    <Fragment>
      <div className="container">
        <section className="home">
          <section className="home-header">
            <h2 className="">Welcome to my med-calc</h2>
          </section>
          <h3 className="text-danger">20 drops</h3>
          <p>
            Yes, there are approximately 20 drops in 1 mL (milliliter). One
            milliliter is equal to 0.20 teaspoons or 0.06 fluid ounces and can
            be used to measure small amounts of medical solutions like
            medications. It's important to remember that the exact measurement
            may vary depending on how many drops your dropper contains.
          </p>
          <hr></hr>
          <div>
            {" "}
            <h3 className="text-danger">Weight calc</h3>
            <div>
              <img src={dose2} alt="dose2"></img>
            </div>
            <div>
              <img src={dose3} alt="dose3"></img>

            </div>
          </div>
        </section>
      </div>
    </Fragment>
  );
}

export default MedCalc;
