import React from "react";
import "./AboutPage.css";
import Typical from "react-typical";
import image from "../assets/images/anonymous.jpg";

const AboutPage = () => {
  return (
    <>
      <main className="aboutMe">
        <div className="contentBox">
          <h5>my portfolio</h5>
          <h1>my name's Adam</h1>
          <h2>
            I'm a
            <Typical
              steps={[
                "developer",
                1000,
                "designer",
                500,
                "yogin",
                1000,
                "guitar player",
                1000,
              ]}
              loop={Infinity}
              wrapper="p"
            />
          </h2>
        </div>
        <div className="imageBox">
          <img src={image} alt="" />
        </div>
      </main>
    </>
  );
};

export default AboutPage;
