import React, { Component } from "react";
import { Col, Row, Input, Icon } from "react-materialize";

export default class ItemSearch extends Component {
  state = {
    userId: 0,
    lists: []
  };
  render() {
    return (
      <Row>
        <Col s={12}>
          <Row>
            <Input
              className="autocomplete white-text"
              s={12}
              type="text"
              defaultValue="What do you need?"
              label="Add another item"
              id="autocomplete-input"
              name="item"
              onChange={this.props.onChange}
            >
              <Icon small left>
                textsms
              </Icon>
            </Input>
          </Row>
        </Col>
      </Row>
    );
  }
}
