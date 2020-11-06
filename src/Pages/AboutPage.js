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
            <p>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Optio
              amet vero quas asperiores vel, sapiente voluptas neque est
              veritatis eaque cum! Magni, vel! Quibusdam rerum quam asperiores,
              dolor ipsam doloremque? Doloremque, labore suscipit. Facilis
              nihil, itaque dignissimos tenetur culpa, veniam, doloremque
              inventore commodi mollitia quod at? Vitae
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
