import React from "react";
import "./Card.css";
import CardButton from "./CardButton";

const Card = (props) => {
  return (
    <div className="card">
      <div className="imgBox">
        <img src={props.item.image} alt="" />
      </div>
      <div className="content">
        <h1>{props.item.title}</h1>
        <p>{props.item.content}</p>
        <CardButton link={props.item.link} />
      </div>
    </div>
  );
};

export default Card;
