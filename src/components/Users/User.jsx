import React from "react";
import {Link} from "react-router-dom";

const User = ({user}) => (
  <div className="card shadow">
    <div className="card-body">
      <h5 className="card-title">{user.name}</h5>
      <h6 className="card-subtitle mb-2 text-muted">{user.username}</h6>
      <Link
        to={`/users/${user.id}/albums`}
        className="btn btn-success"
      >
        Список альбомов
      </Link>
    </div>
  </div>
)

export default User;
