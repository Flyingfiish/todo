import React, { Component } from "react";
import CardComponent from "../Card";
import CardModel from "../../models/Card";
import { Card, Button, InputGroup, Container, Form, BP } from "bootstrap-4-react";

export default class Column extends Component {
  Cards = this.props.columnData.cards;

  state = {
    cards: [],
    validityOfName: true
  };

  render() {
    const cardList = this.Cards.map(card => (
      <CardComponent
        key={card.id}
        name={card.name}
        id={card.id}
        date={card.date}
        deleteCard={this.deleteCard.bind(this)}
      ></CardComponent>
    ));

    const alert = !this.state.validityOfName && (
      <BP text="danger">Введите корректное название</BP>
    );

    return (
      <Card style={{ width: "400px" }}>
        <Card.Header>
          <Button
            close
            type="button"
            className="close"
            aria-label="Close"
            onClick={() => {
              this.props.deleteColumn(this.props.id);
            }}
          >
            <span aria-hidden="true">&times;</span>
          </Button>
          <h2>{this.props.name}</h2>
          <h6 className="text-muted"> ID: {this.props.id}</h6>
        </Card.Header>
        <Card.Body>
          <InputGroup mb="3" style={{ padding: "0" }}>
            <Container
              style={{ maxHeight: "320px", overflowY: "auto", padding: "0" }}
            >
              {cardList}
            </Container>
            <Form.Input
              id={this.props.id}
              type="text"
              className="form-control"
              style={{ margin: "10px 0" }}
            ></Form.Input>
            <InputGroup.Append style={{ margin: "10px 0" }}>
              <Button
                outline
                success
                type="button"
                onClick={this.addCard.bind(this)}
              >
                +
              </Button>
            </InputGroup.Append>
          </InputGroup>
          {alert}
        </Card.Body>
      </Card>
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
