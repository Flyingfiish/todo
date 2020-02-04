import React, { Component } from "react";
import Column from "../Column";
import AddColumn from "../AddColumn";
import ColumnModel from "../../models/Column";

export default class Desk extends Component {
  Columns = [];
  state = {
    columns: []
  };

  desk = this.props.desk;

  render() {
    console.log(this.desk);
    const columnList = this.desk.columns.map(column => (
      <div className="col" key={column.id}>
        <Column
          name={column.name}
          id={column.id}
          cards={column.cards}
          deleteColumn={this.deleteColumn.bind(this)}
          columnData={this.desk.columns[column.id]}
        ></Column>
      </div>
    ));

    return (
      <div className="container-fluid">
        <div
          className="jumbotron jumbotron-fluid border rounded"
          style={{ padding: "30px 0 " }}
        >
          <div className="container">
            <h1 className="display-4">Название доски</h1>
          </div>
        </div>
        <div
          className="jumbotron jumbotron-fluid d-flex flex-row border rounded"
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
            <div className="col">
              <AddColumn addColumn={this.addColumn.bind(this)}></AddColumn>
            </div>
          </section>
        </div>
      </div>
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
