/********************************************************HomePage******************************************************************************/
import React from "react";
import { Row, Col, Container } from "react-bootstrap";
import Header from "../Components/header";

import Input from "../Components/input";
import Result from "../Components/result";
import Navbar from "../Components/navBar";

export default function Homepage() {
  return (
    <React.Fragment>
      <Row className="main">
        <Navbar />
        <Header />

        <Container className="px-4 py-4 overflow-hidden d-flex justify-content-center align-items-center">
          <Row className="gy-5 col-sm-12 col-md-8">
            <Col sm={12} md={6}>
              <Input />
            </Col>
            <Col sm={12} md={6}>
              <Result />
            </Col>
          </Row>
        </Container>
      </Row>
    </React.Fragment>
  );
}
