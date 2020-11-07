import React from "react";
import "./AboutPage.css";
import Typical from "react-typical";
import image from "../assets/images/anonymous.jpg";
import ludzik from "../assets/images/ludzik.png";

const AboutPage = () => {
  return (
    <>
      <main className="aboutMe">
        <div className="container">
          <div className="wrapper">
            <img src={image} alt="" />
            <div className="textBox">
              <h1>Hi my name's Adam</h1>
              <h3>
                I'm
                <Typical
                  steps={[
                    "developer.",
                    1000,
                    "designer.",
                    1500,
                    "yogin.",
                    1000,
                    "guitar player.",
                    1000,
                    "and chess player.",
                    1000,
                  ]}
                  loop={Infinity}
                  wrapper="p"
                />
              </h3>
            </div>
          </div>
          <div className="aboutBox">
            <h2>little about me</h2>
            <p>
              <br />
              I'm passionate about web technologies. I am currently learning
              React.js, my next goal is Gatsby.js in my spare time I train yoga,
              play guitar, go for walks with my beloved dog.
            </p>
          </div>
        </div>
      </main>
    </>
  );
};

export default AboutPage;
