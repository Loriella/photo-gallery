import React, {useEffect, useState} from "react";
import Photo from "./Photo";
import Loader from "../Loader/Loader";
import ModalPhoto from "../Modal/ModalPhoto";
import {useDispatch, useSelector} from "react-redux";
import {useParams} from "react-router";
import {fetchPhotosByAlbumId} from "../../redux/actions";

const Photos = () => {
  const [index, setIndex] = useState(-1);

  const {albumId} = useParams();
  const photos = useSelector(state => state.photos[albumId]) ?? [];

  const dispatch = useDispatch();
  const photosLength = photos.length;
  useEffect(() => {
    if (!photosLength) {
      dispatch(fetchPhotosByAlbumId(albumId))
    }
  }, [albumId, dispatch, photosLength])

  const loading = useSelector(state => state.photosLoading);

  return (
    <div className="row">
      {
        loading
          ? <Loader/>
          : photos.map((photo, index) => {
            return (
              <div key={photo.id} className="col-3 mt-4">
                <Photo
                  photo={photo}
                  onClick={() => setIndex(index)}
                />
              </div>
            )
          })
      }
      {
        photos[index]
        && <ModalPhoto
          photo={photos[index]}
          closeAction={() => setIndex(-1)}
          next={() => setIndex((index + 1) % photosLength)}
          previous={() => setIndex((index - 1 + photosLength) % photosLength)}
        />
      }
    </div>
  )
};

export default Photos;
