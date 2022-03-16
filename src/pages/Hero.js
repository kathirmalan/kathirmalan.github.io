import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import Header from "../compoents/Header";

const Hero = () => {
  return (
    <>
      <Container className="hero-component">
        <Header />
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
