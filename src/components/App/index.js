import React, { Component } from "react";
import NavBar from "../NavBar";
import Desk from "../Desk";
import GoogleLogin from "react-google-login";

const responseGoogle = response => {
  console.log(response);
};

export default class App extends Component {
  render() {
    console.log(this.props.data);

    return (
      <div>
        <NavBar></NavBar>
        <Desk desk={this.props.data.users[0].desks[0]}></Desk>
        <GoogleLogin
          clientId="540732885391-d9fah5jpk41a6io5l4shsmrbhblcrqk3.apps.googleusercontent.com"
          buttonText="Login"
          onSuccess={responseGoogle}
          onFailure={responseGoogle}
          cookiePolicy={"single_host_origin"}
        />
      </div>
    );
  }
}
