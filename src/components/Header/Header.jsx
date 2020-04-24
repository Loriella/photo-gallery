import React from "react";
import {Link, useLocation} from "react-router-dom";

function Header() {
  const {pathname} = useLocation();
  const path = pathname.split("/").filter(a => a);
  const hasAlbums = path[path.length - 2] === "albums";
  const newPath = path.slice(0, -1).join("/");

  return (
    <nav className="navbar navbar-dark bg-success" aria-label="breadcrumb">
      <div className="container">
        <ol className="breadcrumb bg-transparent font-weight-bold mb-0">
          <li className="breadcrumb-item">
            <Link className="text-white" to="/">Пользователи</Link>
          </li>
          {
            hasAlbums &&
            <li className="breadcrumb-item">
              <Link className="text-white" to={`/${newPath}`}>Альбомы</Link>
            </li>
          }
        </ol>
      </div>
    </nav>
  );
}

export default Header;
