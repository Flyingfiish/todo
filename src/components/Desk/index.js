import React, { Component } from "react";
import Column from "../Column";
import AddColumn from "../AddColumn";

const Columns = [];

export default class Desk extends Component {
  state = {
    columns: []
  };

  render() {
    const columnList = Columns.map(column => (
      <div className="col" key={column.id}>
        <Column
          name={column.name}
          id={column.id}
          cards={column.cards}
          deleteColumn={this.deleteColumn.bind(this)}
        ></Column>
      </div>
    ));

    return (
      <div className="container-fluid d-flex flex-row">
        <section
          style={{
            display: "flex",
            flexDirection: "row",
            overflowX: "auto",
            height: "800px"
          }}
        >
          {columnList}
          <div className="col">
            <AddColumn addColumn={this.addColumn.bind(this)}></AddColumn>
          </div>
        </section>
      </div>
    );
  }

  deleteColumn(id) {
    console.log(id);
    Columns.splice(id, 1);
    this.setState({
        columns: Columns
    })
  }

  addColumn(name) {
    Columns.push({
      id: Columns.length,
      name: name,
      cards: []
    });

    this.setState({
      columns: Columns
    });
  }
}
