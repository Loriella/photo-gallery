import React, {useEffect} from "react";
import {Link} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import {fetchPhotosByAlbumId} from "../../redux/actions";

const Album = ({album}) => {
  const id = album.id;
  const photos = useSelector(state => state.photos[id]);

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchPhotosByAlbumId(id))
  }, [id, dispatch]);

  const cover = photos?.[0].thumbnailUrl ?? "";
  const albumSize = photos?.length ?? 0;

  return (
    <div className="card border-0 bg-secondary shadow card-picture" style={{backgroundImage: `url(${cover})`}}>
      <Link to={`/users/${album.userId}/albums/${id}`}>
        <div className="card-img-overlay">
          <small className="card-text text-center text-white">В альбоме {albumSize} фото</small>
          <h5 className="card-title text-uppercase text-white">{album.title}</h5>
        </div>
      </Link>
    </div>
  );
};

export default Album;
