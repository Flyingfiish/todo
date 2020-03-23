import React, { Component } from "react";
import ProfileCollapse from "../ProfileCollapse";
import { Navbar, Nav, Button } from "bootstrap-4-react";
import Logo from "../Logo";

export default class NavBar extends Component {
  render() {
    return (
      <div>
        <Navbar
          expand="lg"
          light
          bg="dark"
          h="100"
          display="flex"
          flex="column"
        >
          <Navbar.Toggler target="#navbarSupportedContent" />
          <Navbar.Brand href="#">
            <Logo></Logo>
          </Navbar.Brand>
          <Navbar.Nav mr="auto">
            <Nav.Item active display="flex" flex="column">
              <Button style={{ margin: "5px" }} secondary>
                Home
              </Button>
              <Button style={{ margin: "5px" }} secondary>
                Доски
              </Button>
              <Button style={{ margin: "5px" }} secondary>
                Добавить доску
              </Button>
              <Button style={{ margin: "5px" }} secondary>
                Информация
              </Button>
            </Nav.Item>
          </Navbar.Nav>
          <Button
            mt="auto"
            style={{ margin: "5px" }}
            secondary
            data-toggle="modal"
            data-target="#profileModal"
          >
            Профиль
          </Button>
          <ProfileCollapse></ProfileCollapse>
        </Navbar>
      </div>
    );
  }
}
