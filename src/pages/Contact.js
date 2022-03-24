import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import Header from "../compoents/Header";
import { faHandshake } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import TwitterIcon from "../assets/twitter-icon.svg";

const Contact = () => {
  return (
    <>
      <Container className="hero-component">
        <Header />
        <Row className="justify-content-md-center hero-content">
          <Col>
            <p className="title">
              Get in touch <FontAwesomeIcon icon={faHandshake} />
            </p>
          </Col>
        </Row>
        <Row>
          <Col className="">
            <a
              href="https://twitter.com/kathirmalan"
              target="_BLANK"
              className="social-links"
            >
              <img
                alt="twiiter-icon"
                className="social-links-icon"
                src={TwitterIcon}
              />
              @kathirmalan
            </a>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default Contact;
