import React from "react";
import { cardsData } from "../data/cardsData";
import Card from "../components/Card";
import "./TechnologiesPage.css";

const TechnologiesPage = () => {
  const techItems = cardsData.map((item) => <Card item={item} />);
  return (
    <>
      <main>
        <h1>Technologies i use:</h1>
        <div className="tech-container">{techItems}</div>
      </main>
    </>
  );
};

export default TechnologiesPage;
