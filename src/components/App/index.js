import React, { Component } from "react";
import NavBar from "../NavBar";
import Desk from "../Desk";

import { BDiv } from 'bootstrap-4-react';



export default class App extends Component {
  render() {
    console.log(JSON.stringify(this.props.data));

    return (
      <BDiv display="flex" h="100">
        <NavBar></NavBar>
        <Desk desk={this.props.data.users[0].desks[0]}></Desk>
      </BDiv>
    );
  }
}
