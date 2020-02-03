import React, { Component } from "react";
import Column from "../Column";

const Columns = [];

export default class Desk extends Component {
  state = {
    columns: []
  };

  render() {
    const columnList = Columns.map(column => <Column key={column.id} id={column.id}></Column>);

    return (
      <div className="container">
        <button className="btn btn-primary btn-lg" onClick={this.addColumn.bind(this)}>Добавить колонку</button>
        <div>
            {columnList}
        </div>
      </div>
    );
  }

  addColumn() {
    Columns.push({
      id: Columns.length + 1
    });

    this.setState({
      columns: Columns
    });
  }
}
