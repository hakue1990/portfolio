import React from "react";
import "./AboutPage.css";
import Typical from "react-typical";
import logo from "../assets/images/anonymous.jpg";

const AboutPage = () => {
  return (
    <>
      <main className="aboutMe">
        <img src={logo} alt="logo" />
        <h1>Hi i'm Adam</h1>
        <br />
        <p>
          I'm a{" "}
          <Typical
            loop={Infinity}
            wrapper="b"
            steps={[
              "developer",
              1000,
              "designer",
              1000,
              "yogin",
              1000,
              "guitarist",
              1000,
              "dreamer",
              1000,
            ]}
          />
        </p>
      </main>
    </>
  );
};

export default AboutPage;
