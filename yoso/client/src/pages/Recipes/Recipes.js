import React, { Component } from 'react';
import ListItem from '../../components/ListItem'
import { Container, Row, Col } from "react-materialize";

class Recipes extends Component {
  render() {
    return (
      <Container className="center-align">
        <Row>
          <Col s={12}>
            <h1 className="white-text fade-in">FIND RECIPES</h1>
          </Col>
        </Row>
        <div className="animate-up">
          <ListItem />
        </div>
      </Container>
    );
  }
}

export default Recipes;