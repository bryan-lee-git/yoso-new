import React, { Component } from "react";
import WasteItem from "../../components/WasteItem";
import { Container, Row, Col, Icon, Button } from "react-materialize";
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
              <BackBtn goto="/home"/>
              <WasteItem context={userContext} />
            </Container>
          );
        }}
      </UserContext.Consumer>
    );
  }
}

export default Waste;
