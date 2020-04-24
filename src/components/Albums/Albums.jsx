import React, {useEffect} from "react";
import Album from "./Album";
import Loader from "../Loader/Loader";
import {useDispatch, useSelector} from "react-redux";
import {fetchAlbumsByUserId} from "../../redux/actions";
import {useParams} from "react-router";

const Albums = () => {
  const loading = useSelector(state => state.albumsLoading);
  const albums = useSelector(state => state.albums);

  const {userId} = useParams();
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchAlbumsByUserId(userId))
  }, [userId, dispatch] );

  return (
    <div className="row">
      {
        loading
          ? <Loader/>
          : albums.map(album => {
            return (
              <div key={album.id} className="col-3 mt-4">
                <Album album={album}/>
              </div>
            )
          })
      }
    </div>
  )
};

export default Albums;
