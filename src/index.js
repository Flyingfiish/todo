import React from "react";
import { render } from "react-dom";
import App from "./components/App";
import DeskModel from "./models/Desk";
import UserModel from "./models/User";
import DataModel from "./models/Data";
import CardModel from "./models/Card";
import {name, email, url, googleId} from "./components/accountData";
import Mongo from "mongodb";

const mongoClient = new Mongo.MongoClient("mongodb://localhost:27017/", { useNewUrlParser: true });
mongoClient.connect(function(err, client){
 
    if(err){
        return console.log(err);
    }
    // взаимодействие с базой данных
    const db = client.db('todoData');
    let collection = db.collection('data');
    console.log(collection);
    client.close();
});

const Desk = new DeskModel([
  {
    id: 0,
    name: "Tasks",
    cards: [new CardModel(0, '123', 'lol)', new Date())]
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
