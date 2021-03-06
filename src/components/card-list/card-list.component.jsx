import React, { Component } from "react";
import Card from "../card/card.component";
import "./card-list.style.css";

const CardList = (props) => {
  return (
    <div className="card-container">
      {props.filterList.map((monster) => {
        const { name, email, id } = monster;
        return <Card name={name} email={email} id={id} key={id} />;
      })}
    </div>
  );
};
export default CardList;
