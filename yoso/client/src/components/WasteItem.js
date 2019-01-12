import React, { Component } from "react";
import { Col, Card, Row } from "react-materialize";

import Moment from "react-moment";

import WasteSimData from "./WasteSimData";
//import "moment-timezone";

class WasteItem extends Component {
  render() {
    const date = new Date();
    const { first, id } = this.props.context.user;
    return (
      <Row>
        <Col s={4} offset="3">
          <Card className="z-depth-3">
            <h4>{first.toUpperCase()}'S WASTE</h4>
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
          <WasteSimData UserId={id} />
        </Col>
      </Row>
    );
  }
}

export default WasteItem;
