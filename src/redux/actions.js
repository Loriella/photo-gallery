import CallApi from "../api/api";
import * as types from "./types";

export const fetchUsers = () => dispatch => {
  dispatch({
    type: types.FETCH_USERS
  });
  CallApi.getUsers()
    .then(userList => {
      dispatch(updateUsers(userList));
    })
    .catch(() => {
      dispatch({
        type: types.FETCH_USERS_ERROR
      })
    })
};

const updateUsers = (userList) => ({
  type: types.FETCH_USERS_SUCCESS,
  payload: userList
});

export const fetchAlbumsByUserId = (userId) => dispatch => {
  dispatch({
    type: types.FETCH_ALBUMS_BY_USER_ID
  });
  CallApi.getAlbumsByUserId(userId)
    .then(albums => {
      dispatch(updateAlbums(albums));
    })
    .catch(() => {
      dispatch({
        type: types.FETCH_ALBUMS_BY_USER_ID_ERROR
      })
    })
};

const updateAlbums = (albums) => ({
  type: types.FETCH_ALBUMS_BY_USER_ID_SUCCESS,
  payload: albums
});

export const fetchPhotosByAlbumId = (albumId) => dispatch => {
  dispatch({
    type: types.FETCH_PHOTO_BY_ALBUM_ID
  });
  CallApi.getPhotosByAlbumId(albumId)
    .then(photos => {
      dispatch(updatePhotos(albumId, photos));
    })
    .catch(() => {
      dispatch({
        type: types.FETCH_PHOTO_BY_ALBUM_ID_ERROR
      })
    })
};

const updatePhotos = (albumId, photos) => ({
  type: types.FETCH_PHOTO_BY_ALBUM_ID_SUCCESS,
  payload: {
    albumId,
    photos
  }
});
