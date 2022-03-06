import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHouse,
  faUserNinja,
  faFingerprint,
  faRocket,
} from "@fortawesome/free-solid-svg-icons";

const Menu = () => {
  return (
    <>
      <div className="menu">
        <div className="menu-items">
          <a href="#" className="item">
            <FontAwesomeIcon icon={faHouse} />
          </a>
          <a href="#" className="item">
            <FontAwesomeIcon icon={faUserNinja} />
          </a>
          <a href="#" className="item">
            <FontAwesomeIcon icon={faFingerprint} />
          </a>
          <a href="#" className="item">
            <FontAwesomeIcon icon={faRocket} />
          </a>
        </div>
      </div>
    </>
  );
};

export default Menu;
