import React from "react";
import "./App.css";
import { Provider } from "react-redux";
import store from "./store";

export default class App extends React.Component {
  render() {
    return (
      <Provider store={store}>
        <div className="App">
          <h1>Photo Album</h1>
        </div>
      </Provider>
    );
  }
}
