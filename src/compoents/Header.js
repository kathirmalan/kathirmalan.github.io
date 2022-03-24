import React from "react";
import { Row, Col } from "react-bootstrap";
import notchImg from "../assets/notch-img.jpeg";
import { faCloudArrowDown } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import cvLink from "../assets/docs/kathirmalan-resume.pdf";

const Header = () => {
  return (
    <>
      <Row className="header">
        <Col className="notch-img">
          <img src={notchImg} alt="notch-img" />
        </Col>
        <Col className="hotlinks">
          <a href={cvLink} target="_BLANK" className="cv-btn">
            Resume <FontAwesomeIcon icon={faCloudArrowDown} />
          </a>
        </Col>
      </Row>
    </>
  );
};

export default Header;
