import React from "react";
import "./AboutPage.css";
import Typical from "react-typical";
import myname from "../assets/images/myname.svg";
import myimage from "../assets/images/anonymous.jpg";

const AboutPage = () => {
  return (
    <>
      <main className="aboutMe">
        <div className="about-container">
          <div className="contentBox">
            <img src={myname} alt="myname" />
          </div>
          <div className="imageBox">
            <img src={myimage} alt="adam portrait" />
          </div>
        </div>
      </main>
    </>
  );
};

export default AboutPage;
