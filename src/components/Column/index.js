import React, { Component } from "react";
import Card from "../Card";

const Cards = [];

export default class Column extends Component {
  state = {
    cards: []
  };

  render() {
    const cardList = Cards.map(card => (
      <Card key={card.id} id={card.id}></Card>
    ));

    return (
      <div className="card" style={{ width: "400px" }}>
        <div className="card-header">
          <h2>{this.props.name}</h2>
          <h6 className="text-muted"> ID: {this.props.id}</h6>
        </div>
        <div className="card-body">
          <div className="input-group mb-3">
            {cardList}
            <input type="text" className="form-control"></input>
            <div className="input-group-append">
              <button className="btn btn-outline-success" type="button">
                +
              </button>
            </div>
          </div>
        </div>
        <div className="card-body">
          <button className="btn btn-primary" onClick={this.addCard.bind(this)}>
            Добавить карточку
          </button>
          <button className="btn">Удалить колонку</button>
        </div>
      </div>
    );
  }

  addCard() {
    Cards.push({
      id: Cards.length + 1
    });

    this.setState({
      cards: Cards
    });
  }
}
