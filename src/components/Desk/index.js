import React, { Component } from "react";
import Column from "../Column";
import AddColumn from "../AddColumn";
import ColumnModel from "../../models/Column";
import { Display3, Jumbotron, Container, Col } from "bootstrap-4-react";

export default class Desk extends Component {
  Columns = [];
  state = {
    columns: []
  };

  desk = this.props.desk;

  render() {
    console.log(this.desk);
    const columnList = this.desk.columns.map(column => (
      <Col key={column.id}>
        <Column
          name={column.name}
          id={column.id}
          cards={column.cards}
          deleteColumn={this.deleteColumn.bind(this)}
          columnData={this.desk.columns[column.id]}
        ></Column>
      </Col>
    ));

    return (
      <Container fluid>
        <Display3>Название доски</Display3>
        <Jumbotron
          display="flex"
          flex="row"
          border
          rounded
          style={{ padding: "20px" }}
        >
          <section
            style={{
              display: "flex",
              flexDirection: "row",
              overflowX: "auto",
              height: "600px"
            }}
          >
            {columnList}
            <Col>
              <AddColumn addColumn={this.addColumn.bind(this)}></AddColumn>
            </Col>
          </section>
        </Jumbotron>
      </Container>
    );
  }

  deleteColumn(id) {
    this.desk.columns.splice(
      this.desk.columns.indexOf(this.desk.columns.find(item => item.id === id)),
      1
    );
    this.setState({
      columns: this.desk.columns
    });
  }

  addColumn(name) {
    this.desk.columns.push(new ColumnModel(this.desk.columns.length, name, []));
    console.log(this.desk.columns);
    this.setState({
      columns: this.desk.columns
    });
  }
}
