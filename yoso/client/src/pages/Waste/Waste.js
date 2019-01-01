import React, { Component } from 'react';
import WasteItem from '../../components/WasteItem';
import { Container, Row, Col } from "react-materialize";

class Waste extends Component {
  render() {
    return (
      <Container className="center-align">
        <br/>
        <Row>
          <Col s={12}>
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