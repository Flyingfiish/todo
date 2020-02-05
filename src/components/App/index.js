import React, { Component } from "react";
import { useState } from "react";
import NavBar from "../NavBar";
import Desk from "../Desk";
import GoogleLogin from "react-google-login";
import { BDiv } from 'bootstrap-4-react';

/*const [name, setName] = useState("");
const [email, setEmail] = useState("");
const [url, setUrl] = useState("");
const [googleId, setGoogleId] = useState("");*/

const responseGoogle = response => {
  console.log(response);
  /*setName(response.profileObj.name);
  setEmail(response.profileObj.email);
  setUrl(response.profileObj.imageUrl);
  setGoogleId(response.profileObj.googleId);*/
};

export default class App extends Component {
  render() {
    console.log(this.props.data);

    return (
      <BDiv>
        <NavBar></NavBar>
        <Desk desk={this.props.data.users[0].desks[0]}></Desk>
        <GoogleLogin
          clientId="540732885391-d9fah5jpk41a6io5l4shsmrbhblcrqk3.apps.googleusercontent.com"
          buttonText="Login"
          onSuccess={responseGoogle}
          onFailure={responseGoogle}
          cookiePolicy={"single_host_origin"}
        />
      </BDiv>
    );
  }
}
