import React, {useEffect, useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import {useParams} from "react-router";
import {fetchPhotosByAlbumId} from "../../redux/actions";
import Photo from "./Photo";
import Loader from "../Loader/Loader";
import ModalPhoto from "../Modal/ModalPhoto";

const useModalPhoto = (photos) => {
  const [show, setShow] = useState(false);
  const [currentPhotoIndex, setCurrentPhotoIndex] = useState(null);

  const open = photoIndex => {
    setCurrentPhotoIndex(photoIndex);
    setShow(true);
  };

  const close = () => {
    setCurrentPhotoIndex(null);
    setShow(false);
  };

  const showNextPhoto = () => {
    setCurrentPhotoIndex(currentPhotoIndex => ((currentPhotoIndex + 1) % photos.length));
  };
  const showPreviousPhoto = () => {
    setCurrentPhotoIndex(currentPhotoIndex => ((currentPhotoIndex - 1 + photos.length) % photos.length));
  };
  return {
    modalPhoto: {
      show,
      open,
      close
    },
    showNextPhoto,
    showPreviousPhoto,
    currentPhotoIndex
  };
};

const Photos = () => {

  const {albumId} = useParams();
  const photos = useSelector(state => state.photos[albumId]) ?? [];
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchPhotosByAlbumId(albumId))
  }, [albumId, dispatch])

  const loading = useSelector(state => state.isLoadingPhotos);
  const {
    modalPhoto,
    currentPhotoIndex,
    showNextPhoto,
    showPreviousPhoto
  } = useModalPhoto(photos);

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
                  onClick={() => modalPhoto.open(index)}
                />
              </div>
            )
          })
      }
      {
        modalPhoto.show
        && <ModalPhoto
          photo={photos[currentPhotoIndex]}
          closeAction={modalPhoto.close}
          next={showNextPhoto}
          previous={showPreviousPhoto}
        />
      }
    </div>
  )
};

export default Photos;
