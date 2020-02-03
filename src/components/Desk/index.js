import React, { Component } from "react";
import Column from "../Column";
import AddColumn from "../AddColumn";

export default class Desk extends Component {
  Columns = [];
  state = {
    columns: []
  };

  render() {
    const columnList = this.Columns.map(column => (
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
      <div className="container-fluid">
        <div className="jumbotron jumbotron-fluid border rounded" style={{padding: '30px 0 '}}>
          <div className="container">
            <h1 className="display-4">Название доски</h1>
          </div>
        </div>
        <div className="jumbotron jumbotron-fluid d-flex flex-row border rounded" style={{padding: '20px'}}>
          <section
            style={{
              display: "flex",
              flexDirection: "row",
              overflowX: "auto",
              height: "600px"
            }}
          >
            {columnList}
            <div className="col">
              <AddColumn addColumn={this.addColumn.bind(this)}></AddColumn>
            </div>
          </section>
        </div>
      </div>
    );
  }

  deleteColumn(id) {
    this.Columns.splice(
      this.Columns.indexOf(this.Columns.find(item => item.id === id)),
      1
    );
    this.setState({
      columns: this.Columns
    });
  }

  addColumn(name) {
    this.Columns.push({
      id: this.Columns.length,
      name: name,
      cards: []
    });

    this.setState({
      columns: this.Columns
    });
  }
}
