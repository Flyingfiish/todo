import React, { Component } from "react";

export default class Card extends Component {
  render() {
    return (
      <div className="container-fluid" style={{ margin: "0 0 10px 0" }}>
        <div className="card-body border rounded">
          <button type="button" className="close" aria-label="Close">
            <span aria-hidden="true">&times;</span>
          </button>
          <h6 className="card-title">{this.props.name}</h6>
        </div>
      </div>
    );
  }
}
