import React, { Component } from 'react';
import PantryItem from '../../components/PantryItem';
import { Container, Row, Col } from "react-materialize";

class Pantry extends Component {
  render() {
    return (
      <div className="center-align">
        <br/>
        <Row>
          <Col s={12}>
            <h1 className="white-text fade-in">IN THE PANTRY</h1>
          </Col>
        </Row>
        <div className="animate-up">
          <PantryItem />
        </div>
      </div>
    );
  }
}

export default Pantry;