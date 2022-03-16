import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHouse,
  faUserNinja,
  faFingerprint,
  faRocket,
} from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";

const Menu = () => {
  return (
    <>
      <div className="menu">
        <div className="menu-items">
          <Link to="/" className="item">
            <FontAwesomeIcon icon={faHouse} />
          </Link>

          <Link to="/profile" className="item">
            <FontAwesomeIcon icon={faUserNinja} />
          </Link>

          <Link to="/handcrafts" className="item">
            <FontAwesomeIcon icon={faFingerprint} />
          </Link>

          <Link to="/contact" className="item">
            <FontAwesomeIcon icon={faRocket} />
          </Link>
        </div>
      </div>
    </>
  );
};

export default Menu;
