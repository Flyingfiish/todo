import React, { Component } from "react";
import Card from "../Card";
import CardModel from "../../models/Card";

export default class Column extends Component {
  Cards = this.props.columnData.cards;

  state = {
    cards: [],
    validityOfName: true
  };

  render() {
    const cardList = this.Cards.map(card => (
      <Card
        key={card.id}
        name={card.name}
        id={card.id}
        date={card.date}
        deleteCard={this.deleteCard.bind(this)}
      ></Card>
    ));

    const alert = !this.state.validityOfName && (
      <p class="text-danger">Введите корректное название</p>
    );

    return (
      <div className="card" style={{ width: "400px" }}>
        <div className="card-header">
          <button
            type="button"
            className="close"
            aria-label="Close"
            onClick={() => {
              this.props.deleteColumn(this.props.id);
            }}
          >
            <span aria-hidden="true">&times;</span>
          </button>
          <h2>{this.props.name}</h2>
          <h6 className="text-muted"> ID: {this.props.id}</h6>
        </div>
        <div className="card-body">
          <div className="input-group mb-3" style={{ padding: "0" }}>
            <div
              className="container"
              style={{ maxHeight: "320px", overflowY: "auto", padding: "0" }}
            >
              {cardList}
            </div>
            <input
              id={this.props.id}
              type="text"
              className="form-control"
              style={{ margin: "10px 0" }}
            ></input>
            <div className="input-group-append" style={{ margin: "10px 0" }}>
              <button
                className="btn btn-outline-success"
                type="button"
                onClick={this.addCard.bind(this)}
              >
                +
              </button>
            </div>
          </div>
          {alert}
        </div>
      </div>
    );
  }

  deleteCard(id) {
    this.Cards.splice(
      this.Cards.indexOf(this.Cards.find(item => item.id === id)),
      1
    );
    this.setState({
      cards: this.Cards
    });
  }

  addCard() {
    const name = document.getElementById(this.props.id).value;
    if (name !== "") {
      this.Cards.push(new CardModel(this.Cards.length, name, {}, new Date()));

      this.setState({
        cards: this.Cards,
        validityOfName: true
      });
      document.getElementById(this.props.id).value = "";
    } else {
      this.setState({
        validityOfName: false
      });
    }
  }
}
