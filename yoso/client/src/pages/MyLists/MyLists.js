import React, { Component } from 'react';
import UserLists from '../../components/UserLists';
import ListItem from '../../components/ListItem';
import { Container, Row, Col } from "react-materialize";

class MyLists extends Component {
  render() {
    return (
      <Container className="center-align">
        <Row>
          <Col s={12}>
            <h1 className="white-text fade-in">YOUR LISTS</h1>
          </Col>
        </Row>
        <div className="animate-up">
          <UserLists />
          <ListItem />
        </div>
      </Container>
    );
  }
}

export default MyLists;