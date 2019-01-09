import React, { Component } from "react";
import WasteItem from "../../components/WasteItem";
import { Container, Row, Col, Icon, Button } from "react-materialize";
import { Link } from "react-router-dom";

class Waste extends Component {
  render() {
    return (
      <Container className="center-align">
        <br />
        <Row>
          <Col s={3}>
            <Link to="/home">
              <br />
              <br />
              <br />
              <Button>
                <Icon>arrow_back</Icon>
              </Button>
            </Link>
          </Col>
          <Col s={6}>
            <h1 className="white-text fade-in">WASTE LESS!</h1>
          </Col>
        </Row>
        <div className="animate-up btn-row">
          <WasteItem />
        </div>
      </Container>
    );
  }
}

export default Waste;
