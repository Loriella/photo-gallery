import React from "react";

const ModalPhoto = ({photo, closeAction, next, previous}) => (
  <div className="modal" role="dialog" style={{display: "block"}}>
    <div className="modal-dialog modal-dialog-centered" role="document">
      <div className="modal-content">
        <div className="modal-header">
          <h5 className="modal-title text-uppercase" id="exampleModalLabel">{photo.title}</h5>
          <button type="button" className="close" data-dismiss="modal" aria-label="Close" onClick={closeAction}>
            <span aria-hidden="true">&times;</span>
          </button>
        </div>
        <div className="modal-body">
          <img
            className="img-fluid"
            src={photo.url}
            alt={photo.title}
          />
        </div>
        <div className="modal-footer d-flex justify-content-between">
          <button
            onClick={previous}
            type="button"
            className="btn btn-success"
            data-dismiss="modal"><span className="carousel-control-prev-icon" aria-hidden="true"/></button>
          <button
            onClick={next}
            type="button"
            className="btn btn-success"><span className="carousel-control-next-icon" aria-hidden="true"/></button>
        </div>
      </div>
    </div>
  </div>
);

export default ModalPhoto;
