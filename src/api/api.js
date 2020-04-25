export const API_URL = "https://jsonplaceholder.typicode.com";

const fetchApi = (url) => {
  return fetch(`${API_URL}${url}`)
    .then(response => {
      if (response.status < 400) {
        return response.json();
      } else {
        throw response;
      }
    })
};

export default class CallApi {
  static getUsers() {
    return fetchApi(
      `/users`
    )
  };

  static getAlbumsByUserId(userId) {
    return fetchApi(
      `/users/${userId}/albums`
    )
  };

  static getPhotosByAlbumId(albumId) {
    return fetchApi(
      `/albums/${albumId}/photos`
    )
  };
};
