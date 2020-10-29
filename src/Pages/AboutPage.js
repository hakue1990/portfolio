import React from "react";
import "./AboutPage.css";
import Typical from "react-typical";
import logo from "../assets/images/anonymous.jpg";

const AboutPage = () => {
  return (
    <>
      <main className="aboutMe">
        <br />
        <h1 style={{ fontSize: "1.3em" }}>
          Console.log("Hi i'm a{" "}
          <Typical
            loop={Infinity}
            wrapper="b"
            steps={[
              `developer.")`,
              1500,
              `designer.")`,
              1500,
              `yogin.")`,
              1500,
              `guitar player.")`,
              1500,
              `dreamer.")`,
              1500,
            ]}
          />
        </h1>
      </main>
      <section className="aboutMe">
        <h2>About me</h2>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sed amet
          maiores quasi distinctio officiis. Repellat eligendi possimus cumque
          vel modi libero, animi voluptatem vero reprehenderit harum laudantium
          ipsa nesciunt atque ea quos eos nobis consectetur officia velit,
          obcaecati dolorem dolor exercitationem perspiciatis iste? Officia
          eligendi quos, quod repellendus aspernatur voluptatum omnis, ipsa
          dicta odit doloremque expedita eius tenetur unde voluptas. Numquam
          reiciendis repellat incidunt dolor? Soluta error dicta ad, magni ipsa
          illum repellat harum accusantium veniam, aliquid numquam maiores.
          Dolor adipisci sunt error velit quasi rerum quod facilis, aliquid
          veniam, illum sint praesentium accusamus odit autem explicabo
          laboriosam voluptates doloribus!
        </p>
      </section>
    </>
  );
};

export default AboutPage;
