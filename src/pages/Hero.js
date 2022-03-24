import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import Header from "../compoents/Header";

const Hero = () => {
  return (
    <>
      <Container className="hero-component">
        <Header />
        <Row className="justify-content-md-center hero-content">
          <Col lg={{ span: 9 }}>
            <p className="title">
              Hi, <br /> I'm Kathirmalan
            </p>
            <p className="punch-line">
              "A Full-stack Software developer with 4+ years of industrial
              experience in web application development, hosting and maintaining
              the codebase. Expertise in client requirement analysis and
              delivered projects with significant optimizations"
            </p>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default Hero;
