import React, { Component } from "react";

export default class NavBar extends Component {
  render() {
    return (
      <nav className="navbar navbar-inverse">
        <div className="d-flex justify-content-start" style={{display: 'flex', flexDirection: 'row'}}>
          <button className="navbar-toggler">Home</button>
          <button className="navbar-toggler">Доски</button>
          <button className="navbar-toggler">Добавить доску</button>
        </div>
        <div className="d-flex justify-content-start" style={{display: 'flex', flexDirection: 'row'}}>
          <button className="navbar-toggler">Информация</button>
          <button className="navbar-toggler">Профиль</button>
        </div>
      </nav>
    );
  }
}
