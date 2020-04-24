import React from "react";

const Photo = ({photo, onClick}) => {
  const cardPhoto = photo?.thumbnailUrl ?? "";

  return (
    <div
      className="card border-0 bg-secondary shadow card-picture"
      style={{backgroundImage: `url(${cardPhoto})`}}
      onClick={onClick}
    >
      <div className="card-img-overlay">
        <h6 className="card-title text-uppercase text-white">{photo?.title ?? ""}</h6>
      </div>
    </div>
  );
};

export default Photo;
