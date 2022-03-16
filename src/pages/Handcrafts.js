import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import Header from "../compoents/Header";

const Handcrafts = () => {
  return (
    <>
      <Container className="hero-component">
        <Header />
        <Row className="justify-content-md-center hero-content">
          <Col lg={{ span: 8, offset: 2 }}>
            <p className="title">handcrafts page</p>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default Handcrafts;
