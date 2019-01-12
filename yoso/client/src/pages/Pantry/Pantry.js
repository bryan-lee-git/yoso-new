import React, { Component } from "react";
import PantryItem from "../../components/PantryItem";
import { Container, Row, Col } from "react-materialize";

import BackBtn from "../../components/BackBtn";

class Pantry extends Component {
  render() {
    return (
      <Container className="center-align">
        <br />
        <Row>
          <Col s={12}>
            <h1 className="white-text fade-in">IN THE PANTRY</h1>
          </Col>
        </Row>
        <BackBtn goto="home" />
        <div className="animate-up">
          <PantryItem />
        </div>
      </Container>
    );
  }
}

export default Pantry;
