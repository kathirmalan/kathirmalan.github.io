import React from "react";
import { Row, Col } from "react-bootstrap";
import notchImg from "../asset/notch-img.jpeg";
import { faCloudArrowDown } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Header = () => {
  return (
    <>
      <Row className="header">
        <Col className="notch-img">
          <img src={notchImg} />
        </Col>
        <Col className="hotlinks">
          <a className="cv-btn">
            Resume <FontAwesomeIcon icon={faCloudArrowDown} />
          </a>
        </Col>
      </Row>
    </>
  );
};

export default Header;
