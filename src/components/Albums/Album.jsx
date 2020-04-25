import React, {useEffect} from "react";
import {Link} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import {fetchPhotosByAlbumId} from "../../redux/actions";

const Album = ({album}) => {
  const albumId = album.id;
  const albumPhotos = useSelector(state => state.photos[albumId] ?? []);

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchPhotosByAlbumId(albumId))
  }, [albumId, dispatch]);

  const defaultAlbumPhoto = albumPhotos[0];
  const albumCover = defaultAlbumPhoto?.thumbnailUrl ?? "";
  const albumSize = albumPhotos.length ?? 0;

  return (
    <div className="card border-0 bg-secondary shadow card-picture" style={{backgroundImage: `url(${albumCover})`}}>
      <Link to={`/users/${album.userId}/albums/${albumId}`}>
        <div className="card-img-overlay">
          <small className="card-text text-center text-white">В альбоме {albumSize} фото</small>
          <h5 className="card-title text-uppercase text-white">{album.title}</h5>
        </div>
      </Link>
    </div>
  );
};

export default Album;
