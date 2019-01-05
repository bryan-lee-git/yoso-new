import React, { Component } from "react";
import UserLists from "../../components/UserLists";
import ListItem from "../../components/ListItem";
import { Container, Row, Col } from "react-materialize";

import { MyContext } from "../../App";

class MyLists extends Component {
  render() {
    return (
      <MyContext.Consumer>
        {context => (
          <div className="center-align">
            <Row>
              <Col s={12}>
                <h1 className="white-text fade-in">
                  {context.state.first}'s LISTS
                </h1>
              </Col>
            </Row>
            <div className="animate-up btn-row">
              <UserLists state={context.state} />
            </div>
          </div>
        )}
      </MyContext.Consumer>
    );
  }
}

export default MyLists;
