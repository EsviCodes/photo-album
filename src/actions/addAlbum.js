// Set up an action creator for the ADD_ALBUM action. Use the pattern as discussed in the previous chapter. An album has an id property and a title property.

// import React from "react";

export const ADD_ALBUM = "ADD_ALBUM";

export function addAlbum(id, title) {
  return {
    type: ADD_ALBUM,
    payload: {
      id: id,
      title: title
    }
  };
}
