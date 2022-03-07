import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import notchImg from "../asset/notch-img.jpeg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCloudArrowDown } from "@fortawesome/free-solid-svg-icons";

const Hero = () => {
  return (
    <>
      <Container className="hero-component">
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
        <Row className="justify-content-md-center hero-content">
          <Col lg={{ span: 8, offset: 2 }}>
            <p className="title">
              Hi, <br /> I'm Kathirmalan
            </p>
            <p className="punch-line">
              Ethuastic young full stack developer posses 4+ years of experince
              in modern web application development for different sectors.
            </p>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default Hero;
