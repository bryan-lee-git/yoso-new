import React, { Component } from "react";
import { Col, Card, Row } from "react-materialize";
import { UserContext } from "../../App";
import Moment from "react-moment";

import WasteSimData from "./WasteSimData";
//import "moment-timezone";

class WasteItem extends Component {
  render() {
    const date = new Date();
    return (
      <UserContext.Consumer>
        {context => {
          console.log(`inside wasteitem, here's the context: `, context);
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
                <WasteSimData UserId={context.state.id} />
              </Col>
            </Row>
          );
        }}
      </UserContext.Consumer>
    );
  }
}

export default WasteItem;
