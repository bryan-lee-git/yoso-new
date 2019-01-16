import React, { Component } from "react";
import WasteItem from "../../components/WasteComponents/WasteItem";
import { Container, Row, Col } from "react-materialize";
import BackBtn from "../../components/BackBtn";
import { UserContext } from "../../App";

class Waste extends Component {
  render() {
    return (
      <UserContext.Consumer>
        {userContext => {
          console.log(`inside waste, here's the context: `, userContext);
          return (
            <Container className="center-align">
              <br />
              <Row>
                <Col s={12}>
                  <h1 className="white-text fade-in">WASTE LESS!</h1>
                </Col>
              </Row>
              <BackBtn goto="/home" />
              <WasteItem context={userContext} />
            </Container>
          );
        }}
      </UserContext.Consumer>
    );
  }
}

export default Waste;
