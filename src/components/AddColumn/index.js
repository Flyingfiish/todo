import React, { Component } from "react";

export default class AddColumn extends Component {
  render() {
    return (
      <div className="card" style={{width: '300px'}}>
        <div className="card-body">
          <h5 className="card-title">Добавить колонку</h5>
          <div className="input-group mb-3">
            <input id="name" type="text" class="form-control"></input>
            <div className="input-group-append">
              <button className="btn btn-outline-success" type="button" onClick={() => {
                  this.props.addColumn(document.getElementById("name").value)
              }}>
                Добавить
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
