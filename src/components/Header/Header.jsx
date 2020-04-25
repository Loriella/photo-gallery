import React from "react";
import {Link, useLocation} from "react-router-dom";
import {useRouteMatch} from "react-router";

const Header = () => {
  const {pathname} = useLocation();
  const isAlbumPage = useRouteMatch("/users/:userId/albums/:albumId");
  const userId = pathname.split("/")[2];

  return (
    <nav className="navbar navbar-dark bg-success" aria-label="breadcrumb">
      <div className="container">
        <ol className="breadcrumb bg-transparent font-weight-bold mb-0">
          <li className="breadcrumb-item">
            <Link className="text-white" to="/">Пользователи</Link>
          </li>
          {
            isAlbumPage &&
            <li className="breadcrumb-item">
              <Link className="text-white" to={`/users/${userId}/albums`}>Альбомы</Link>
            </li>
          }
        </ol>
      </div>
    </nav>
  );
};

export default Header;
