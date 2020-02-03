import React, { Component } from "react";

export default class NavBar extends Component {
  render() {
    return (
      <div className="navbar navbar-inverse">
        <div className="container-fluid">
            <ul className="nav navbar-nav">
                <li className="nav-item"><button className="navbar-toggler">Home</button></li>
                <li className="nav-item"><button className="navbar-toggler">Доски</button></li>
                <li></li>
                <li></li>
                <li></li>
            </ul>
          <button className="navbar-toggler">Home</button>
          <button className="navbar-toggler">Доски</button>
          <button className="navbar-toggler">Добавить доску</button>
          <button className="navbar-toggler">Информация</button>
          <button className="navbar-toggler">Профиль</button>
        </div>
      </div>
    );
  }
}
