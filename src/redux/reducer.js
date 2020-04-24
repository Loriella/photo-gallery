import * as types from "./types";

const initialState = {
  users: [],
  albums: [],
  photos: {},
  usersLoading: false,
  albumsLoading: false,
  photosLoading: false
}

const reducer = (state = initialState, action) => {

  switch (action.type) {
    case types.FETCH_USERS:
      return {
        ...state,
        usersLoading: true
      };

    case types.FETCH_ALBUMS_BY_USER_ID:
      return {
        ...state,
        albumsLoading: true
      };

    case types.FETCH_PHOTO_BY_ALBUM_ID:
      return {
        ...state,
        photosLoading: true
      };

    case types.FETCH_USERS_SUCCESS:
      return {
        ...state,
        users: action.payload,
        usersLoading: false
      };

    case types.FETCH_ALBUMS_BY_USER_ID_SUCCESS:
      return {
        ...state,
        albums: action.payload,
        albumsLoading: false
      };

    case types.FETCH_PHOTO_BY_ALBUM_ID_SUCCESS:
      return {
        ...state,
        photos: {
          ...state.photos,
          [action.payload.albumId]: action.payload.photos
        },
        photosLoading: false
      };

    case types.FETCH_USERS_ERROR:
      return {
        ...state,
        users: [],
        usersLoading: false
      };

    case types.FETCH_ALBUMS_BY_USER_ID_ERROR:
      return {
        ...state,
        albums: [],
        albumsLoading: false
      };

    case types.FETCH_PHOTO_BY_ALBUM_ID_ERROR:
      return {
        ...state,
        photosLoading: false
      };

    default :
      return state;
  }
};

export default reducer;
