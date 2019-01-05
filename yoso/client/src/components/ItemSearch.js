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
        <Col s={8} offset="s2">
          <Row>
            <Input
              s={6}
              className="autocomplete white-text"
              type="text"
              value={this.props.search}
              label="Add another item"
              id="autocomplete-input"
              name="item"
              onChange={this.props.onChange}
            >
              <Icon small left>
                textsms
              </Icon>
            </Input>
            <button
              className="btn waves-effect waves-light"
              type="submit"
              name="action"
              onClick={e =>
                this.props.onSubmit(e, this.props.listId, this.props.search)
              }
            >
              Submit
              <i className="material-icons right">send</i>
            </button>
          </Row>
        </Col>
      </Row>
    );
  }
}
