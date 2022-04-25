import React, { Component } from "react";
import "./card.component.css";
export default class Card extends Component {
  constructor() {
    super();
  }
  render() {
    const { id, name, email } = this.props;
    // console.log("render card");
    return (
      <div>
        <div className="card" key={id}>
          <img
            alt={`monster ${name}`}
            src={`https://robohash.org/${this.props.id}?set=set2&size=180x180`}
          />
          <h2>{name}</h2>
          <p>{email}</p>
        </div>
      </div>
    );
  }
}
