import React, { Component } from "react";
import WasteItem from "../../components/WasteComponents/WasteItem";
import { Container, Row, Col, Icon, Button } from "react-materialize";
import BackBtn from "../../components/BackBtn";

class Waste extends Component {

  render() {
    return (
      <Container className="center-align">
      {this.state.view === 0 ? (
        <div>
          <Row>
            <Col s={6}>
              <h1 className="white-text fade-in">WASTE LESS!</h1>
            </Col>
          </Row>
          <BackBtn goto="/home"/>
        </div>
      ) : 
        <div></div>
      }
      </Container>
    );
  }
}

export default Waste;
