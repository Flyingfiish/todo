import React, { Component } from "react";
import ProfileCollapse from "../ProfileCollapse";
import {
  Navbar,
  Nav,
  Button,
  ButtonGroup,
  Form,
  Collapse
} from "bootstrap-4-react";

export default class NavBar extends Component {
  render() {
    return (
      <div>
        <Navbar expand="lg" light bg="dark">
          <Navbar.Toggler target="#navbarSupportedContent" />
          <Navbar.Nav mr="auto">
            <Nav.Item active>
              <ButtonGroup aria-label="Basic example">
                <Button secondary>Home</Button>
                <Button secondary>Доски</Button>
                <Button secondary>Добавить доску</Button>
              </ButtonGroup>
            </Nav.Item>
          </Navbar.Nav>
          <ButtonGroup inline my="2 lg-0" aria-label="Basic example">
            <Button secondary>Информация</Button>
            <Button secondary data-toggle="modal" data-target="#profileModal">Профиль</Button>
            <ProfileCollapse></ProfileCollapse>
          </ButtonGroup>
        </Navbar>
        
      </div>
    );
  }
}
