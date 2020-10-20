import React from "react";
import "./AboutPage.css";
import Typical from "react-typical";
import logo from "../assets/images/anonymous.jpg";

const AboutPage = () => {
  return (
    <>
      <main className="aboutMe">
        <img src={logo} alt="logo" />
        <h1>Hi my name's Adam</h1>
        <br />
        <p>
          I'm a{" "}
          <Typical
            loop={Infinity}
            wrapper="b"
            steps={[
              "developer.",
              1500,
              "designer.",
              1500,
              "yogin.",
              1500,
              "guitarist.",
              1500,
              "dreamer.",
              1500,
              "smoker.",
              1500,
            ]}
          />
        </p>
      </main>
    </>
  );
};

export default AboutPage;
