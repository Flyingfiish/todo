import React, { Component } from "react";



export default class AddColumn extends Component {
  state = {
    validity: true
  };

  render() {
    const alert = !this.state.validity && (
      <p className="text-danger">Введите корректное название</p>
    );

    return (
      <div className="card" style={{ width: "300px" }}>
        <div className="card-body">
          <h5 className="card-title">Добавить колонку</h5>
          {alert}
          <div className="input-group mb-3">
            <input id="columnName" type="text" className="form-control"></input>
            <div className="input-group-append">
              <button
                className="btn btn-outline-success"
                type="button"
                onClick={() => {
                  this.Add();
                }}
              >
                Добавить
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }

  Add() {
    let value = document.getElementById("columnName").value;
    if (value !== "") {
      this.props.addColumn(document.getElementById("columnName").value);
      document.getElementById("columnName").value = "";
      this.setState({
        validity: true
      });
    } else {
      this.setState({
        validity: false
      });
    }
  }
}
