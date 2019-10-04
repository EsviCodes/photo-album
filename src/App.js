import React from "react";
import "./App.css";
import { Provider } from "react-redux";
import store from "./store";
import AlbumsListContainer from "./components/AlbumsListContainer";

export default class App extends React.Component {
  render() {
    return (
      <Provider store={store}>
        <div className="App">
          <AlbumsListContainer />
        </div>
      </Provider>
    );
  }
}
