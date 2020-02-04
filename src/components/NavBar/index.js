import React, { Component } from "react";
import ProfileCollapse from "../ProfileCollapse";

export default class NavBar extends Component {
  render() {
    return (
      <div>
        <nav className="navbar navbar-inverse">
          <div
            className="d-flex justify-content-start"
            style={{ display: "flex", flexDirection: "row" }}
          >
            <button className="navbar-toggler">Home</button>
            <button className="navbar-toggler">Доски</button>
            <button className="navbar-toggler">Добавить доску</button>
          </div>
          <div
            className="d-flex justify-content-start"
            style={{ display: "flex", flexDirection: "row" }}
          >
            <button className="navbar-toggler">Информация</button>
            <button
              className="navbar-toggler"
              type="button"
              data-toggle="collapse"
              data-target="#collapseExample"
              aria-expanded="false"
              aria-controls="collapseExample"
            >
              Профиль
            </button>
          </div>
        </nav>
        <ProfileCollapse></ProfileCollapse>
      </div>
    );
  }
}
