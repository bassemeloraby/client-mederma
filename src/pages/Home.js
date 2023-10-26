import React, { Fragment } from "react";
// import start1 from "../images/start1.png";
function Home() {
  return (
    <Fragment>
      <section className="home">
        <section className="home-header">
          <h2 className="">Welcome to my new site</h2>
        </section>
        <section>
          <p>Hi, my name is bassem , I am a web-developer and pharmacist</p>
          <p>
            This website is under developing and I created it to help any
            pharmacist in his work with defrent sitution he get in his work as
            prescriptions an Insurance . I hope you enjoing the experince with
            our website and helping us to know about the needs of every
            pharmacist in his job
          </p>
          {/* <div className="mb-2 row">
            <span>clik here to move in website</span>
            <img src={start1} alt="insurance2" className="border"></img>
          </div>*/}
        </section>
        <section>
          {" "}
          I have added new page for calculations ,go to it from Medicine{" "}
        </section>
      </section>
    </Fragment>
  );
}

export default Home;
