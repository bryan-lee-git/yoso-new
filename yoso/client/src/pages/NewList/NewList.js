import React, { Component } from "react";
import { Container, Row, Col, Autocomplete, Input } from "react-materialize";

import { MyContext } from "../../App";

export default class NewList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: ""
    };
  }
  render() {
    return (
      <div className="center-align">
        <Row>
          <Col s={12}>
            <h1 className="white-text fade-in">{this.state.name}</h1>
          </Col>
        </Row>
        <Row>
          <Input
            placeholder="Enter your list's name here"
            s={8}
            label="List Name"
          />
        </Row>
      </div>
    );
  }
}
