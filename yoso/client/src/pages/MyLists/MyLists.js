import React, { Component } from 'react';
import UserLists from '../../components/UserLists';
import ListItem from '../../components/ListItem';
import { Container, Row, Col } from "react-materialize";

class MyLists extends Component {
  render() {
    return (
      <div className="center-align">
      <br/>
        <Row>
          <Col s={12}>
            <h1 className="white-text fade-in">YOUR LISTS</h1>
          </Col>
        </Row>
        <div className="animate-up btn-row">
          <UserLists />
          <ListItem />
        </div>
      </div>
    );
  }
}

export default MyLists;