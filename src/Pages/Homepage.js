/********************************************************HomePage******************************************************************************/
import React from "react";
import { Row, Col, Container } from "react-bootstrap";
import Header from "../Components/header";
import OverAllPPC from "../Components/overAllPPC";
import Input from "../Components/input";
import Result from "../Components/result";
export default function Homepage() {
  return (
    <React.Fragment>
      <Row>
        <Header />
        <OverAllPPC />
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