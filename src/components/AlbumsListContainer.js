import * as React from "react";
import * as request from "superagent";
import AlbumsList from "./AlbumsList";
import { connect } from "react-redux";
// import { helloWorld } from "../actions/test";
import { addAlbum } from "../actions/addAlbum";
import { setAlbums } from "../actions/setAlbums";

const sleep = time =>
  new Promise(resolve =>
    setTimeout(() => resolve(`I waited for ${time} ms`), time)
  );

class AlbumsListContainer extends React.Component {
  state = {};

  componentDidMount() {
    const { addAlbum, setAlbums } = this.props;

    sleep(2000).then(message => this.props.addAlbum(1, message));

    sleep(3000).then(message => this.props.addAlbum(2, message));

    //const uuidv4 = require("uuid/v4");

    addAlbum(5, "Enjoying sunshine");
    addAlbum(10, "Having fun in the US");
    setAlbums([{ id: 1, title: "hi" }]);
  }

  render() {
    if (!this.props.albums) return "Loading...";
    return <AlbumsList albums={this.props.albums} />;
  }
}

const mapStateToProps = state => {
  return {
    albums: state.albums
  };
};

export default connect(
  mapStateToProps,
  { addAlbum: addAlbum, setAlbums: setAlbums }
)(AlbumsListContainer);
