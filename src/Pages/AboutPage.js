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
        <div className="container">
          <div className="wrapper">
            <div className="imgBox">
              <img src={image} alt="" />
            </div>
            <div className="textBox">
              <h1>Cześć nazywam się Adam</h1>
              <h3>
                Jestem
                <Typical
                  steps={[
                    "developerem.",
                    1000,
                    "designerem.",
                    1500,
                    "joginem.",
                    1000,
                    "i gitarzystą (:",
                    1000,
                  ]}
                  loop={Infinity}
                  wrapper="p"
                />
              </h3>
            </div>
          </div>
          <div className="aboutBox">
            <h1>trochę o mnie (:</h1>
            <p>
              od 2 lat jaram się technologiami webowymi. Akutalnie uczę się
              Reacta moim następnym celem jest opanowanie Gatsbiego, oprócz tego
              studiuje informatykę. W wolnym czasię gram na gitarzę i trenuje
              joge. Szczególny nacisk kłade na rozwój!
            </p>
          </div>
        </div>
      </main>
    </>
  );
};

export default AboutPage;

{
  /* <div className="contentBox">
<div className="imageBox">
  <img src={image} alt="" />
</div>
<h5>my portfolio</h5>
<h1>my name's Adam</h1>

</div> */
}
