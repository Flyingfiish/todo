import React, { Component } from "react";
import Card from "../Card";

export default class Column extends Component {
  Cards = [];

  state = {
    cards: [],
    validityOfName: true
  };

  render() {
    console.log(this.state.cards);
    const cardList = this.Cards.map(card => (
      <Card key={card.id} name={card.name} id={card.id}></Card>
    ));

    const alert = !this.state.validityOfName && (
      <p class="text-danger">Введите корректное название</p>
    );

    return (
      <div className="card" style={{ width: "400px" }}>
        <div className="card-header">
          <button type="button" className="close" aria-label="Close" onClick={() => { this.props.deleteColumn(this.props.id)}}>
            <span aria-hidden="true">&times;</span>
          </button>
          <h2>{this.props.name}</h2>
          <h6 className="text-muted"> ID: {this.props.id}</h6>
        </div>
        <div className="card-body">
          <div className="input-group mb-3">
            {cardList}
            <input id={this.props.id} type="text" className="form-control"></input>
            <div className="input-group-append">
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

  addCard() {
    const name = document.getElementById(this.props.id).value;
    if (name !== "") {
      this.Cards.push({
        id: this.Cards.length + 1,
        name: name
      });

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
