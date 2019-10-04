// import addAlbum from "../actions/addAlbum";

export default (state = [], action = {}) => {
  switch (action.type) {
    case "ADD_ALBUM":
      return [...state, { ...action.payload }];
    case "SET_ALBUMS":
      return [...state, { ...action.payload }];

    default:
      return state;
  }
};
