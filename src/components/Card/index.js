import React, { Component } from "react";

export default class Card extends Component {
  render() {
    return (
      <div className="container-fluid" style={{ margin: "0 0 10px 0", padding: '0'}}>
        <div className="card-body border rounded">
          <button type="button" className="close" aria-label="Close" onClick={() => {this.props.deleteCard(this.props.id)}}>
            <span aria-hidden="true">&times;</span>
          </button>
          <h6 className="card-title">{this.props.name}</h6>
          <h6 className="card-subtitle mb-2 text-muted">{this.formatDate.call(this, this.props.date)}</h6>
        </div>
      </div>
    );
  }

  formatDate(date){
    const year = date.getFullYear();
    const day = date.getDate();
    const month = date.getMonth();
    const minutes = date.getMinutes();
    const hours = date.getHours();
    return ((day < 10) ? '0' + day : day) + '.' + ((month < 10) ? '0' + month : month)+ '.' + year + '   ' + hours + ':' + minutes;
  }
}
