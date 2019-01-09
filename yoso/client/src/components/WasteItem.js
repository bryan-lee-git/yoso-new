import React, { Component } from "react";
import { Col, Card, Row } from "react-materialize";
import { MyContext } from "../../src/App";
import Moment from "react-moment";
//import "moment-timezone";

class WasteItem extends Component {
  render() {
    const date = new Date();
    return (
      <MyContext.Consumer>
        {context => {
          return (
            <Row>
              <Col s={4} offset="3">
                <Card className="z-depth-3">
                  <h4>{context.state.first.toUpperCase()}'S WASTE</h4>
                </Card>
                <Card>
                  <h5>ITEMS</h5>
                </Card>
              </Col>
              <Col s={8}>
                <Card className="z-depth-3">
                  <h4>WASTE SIMULATOR</h4>
                  <h5>
                    <Moment format="MM-DD-YYYY">{date}</Moment>
                    <br />
                    <Moment format="MM-DD-YYYY" subtract={{ days: 365 }}>
                      {date}
                    </Moment>
                  </h5>
                </Card>
                <Card className="z-depth-3">
                  <h5>DATA</h5>
                </Card>
              </Col>
            </Row>
          );
        }}
      </MyContext.Consumer>
    );
  }
}

export default WasteItem;
