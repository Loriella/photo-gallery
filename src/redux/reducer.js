import * as types from "./types";

const initialState = {
  users: [],
  albums: [],
  photos: {},
  isLoadingUsers: false,
  isLoadingAlbums: false,
  isLoadingPhotos: false
}

const reducer = (state = initialState, action) => {

  switch (action.type) {
    case types.FETCH_USERS:
      return {
        ...state,
        isLoadingUsers: true
      };

    case types.FETCH_ALBUMS_BY_USER_ID:
      return {
        ...state,
        isLoadingAlbums: true
      };

    case types.FETCH_PHOTO_BY_ALBUM_ID:
      return {
        ...state,
        isLoadingPhotos: true
      };

    case types.FETCH_USERS_SUCCESS:
      return {
        ...state,
        users: action.payload,
        isLoadingUsers: false
      };

    case types.FETCH_ALBUMS_BY_USER_ID_SUCCESS:
      return {
        ...state,
        albums: action.payload,
        isLoadingAlbums: false
      };

    case types.FETCH_PHOTO_BY_ALBUM_ID_SUCCESS:
      return {
        ...state,
        photos: {
          ...state.photos,
          [action.payload.albumId]: action.payload.photos
        },
        isLoadingPhotos: false
      };

    case types.FETCH_USERS_ERROR:
      return {
        ...state,
        users: [],
        isLoadingUsers: false
      };

    case types.FETCH_ALBUMS_BY_USER_ID_ERROR:
      return {
        ...state,
        albums: [],
        isLoadingAlbums: false
      };

    case types.FETCH_PHOTO_BY_ALBUM_ID_ERROR:
      return {
        ...state,
        isLoadingPhotos: false
      };

    default :
      return state;
  }
};

export default reducer;
