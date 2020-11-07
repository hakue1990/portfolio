import React from "react";
import "./CardButton.css";
const CardButton = (props) => {
  return (
    <a href={props.link} target="blank" className="cardButton">
      Dowiedz się więcej
    </a>
  );
};

export default CardButton;
