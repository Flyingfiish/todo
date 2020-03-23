import React from "react";
import { render } from "react-dom";
import App from "./components/App";
import DeskModel from "./models/Desk";
import UserModel from "./models/User";
import DataModel from "./models/Data";
import {name, email, url, googleId} from "./components/accountData";

const Desk = new DeskModel([
  {
    id: 0,
    name: "Tasks",
    cards: []
  }
]);
const User = new UserModel(1, [Desk]);
const Data = new DataModel([User]);

function Base() {
  function click() {
    console.log(name);
  }

  console.log(Data);
  return (
    <div>
      <App data={Data}></App>
      <button onClick={click}>Check</button>
    </div>
  );
}

render(<Base />, document.getElementById("root"));
