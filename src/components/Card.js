import cardsData from "../data/cardsData";
import React from "react";

const Card = (props) => {
  return (
    <div className="card">
      <div className="imgBox">
        <img src="" alt="" />
      </div>
      <div className="content">
        <h1>React</h1>
        <p>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dicta quo
          ducimus neque reprehenderit corrupti minus!
        </p>
      </div>
    </div>
  );
};

export default Card;
