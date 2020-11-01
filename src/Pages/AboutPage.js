import React from "react";
import "./AboutPage.css";
import Typical from "react-typical";
import image from "../assets/images/anonymous.jpg";
import linkedinico from "../assets/images/social media icons/linkedin-brands.svg";
import githubico from "../assets/images/social media icons/github-brands.svg";
import instagraminico from "../assets/images/social media icons/instagram-brands.svg";

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
                1500,
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
        <div className="socialIcons">
          <a
            href="https://www.linkedin.com/in/adam-ha%C5%82da%C5%9B-49616a183/"
            target="_blank">
            <img src={linkedinico} alt="linkedin" />
          </a>
          <a href="https://github.com/hakue1990" target="_blank">
            <img src={githubico} alt="github" />
          </a>
          <a href="https://www.instagram.com/zlygrejpfrut/" target="_blank">
            <img src={instagraminico} alt="instagram" />
          </a>
        </div>
      </main>
    </>
  );
};

export default AboutPage;
