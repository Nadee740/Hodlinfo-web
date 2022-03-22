import React, { Component } from "react";
import { Route, BrowserRouter } from "react-router-dom";
import "./App.css";
import { MainPage } from "./components/MainPage";
import { Telegram } from "./components/Telegram";
import { createBrowserHistory } from "history";

class App extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <BrowserRouter>
        <div className="App">
          <Route path="/" exact component={MainPage} />{" "}
          <Route path="/connect/telegram" component={Telegram} />{" "}
          <Route path="/:id" exact component={MainPage} />{" "}
        </div>{" "}
      </BrowserRouter>
    );
  }
}

export default App;
