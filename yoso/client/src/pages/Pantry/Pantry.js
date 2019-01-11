import React, { Component } from "react";
import PantryItem from "../../components/PantryItem";
import { Container, Row, Col, Icon, Button } from "react-materialize";
import { Link } from "react-router-dom";

class Pantry extends Component {
  render() {
    return (
      <Container className="center-align">
        <br />
        <Row>
          <Col s={12}>
            <h1 className="white-text fade-in">IN THE PANTRY</h1>
          </Col>
          <Col s={12}>
            <Link to="/home">
              <Button className="back-btn">
                <Icon>arrow_back</Icon>
              </Button>
            </Link>
          </Col>
        </Row>
        <div className="animate-up">
          <PantryItem />
        </div>
      </Container>
    );
  }
}

export default Pantry;
