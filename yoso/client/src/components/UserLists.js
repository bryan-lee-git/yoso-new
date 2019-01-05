import React, { Component } from "react";
import { Card, Row, Col } from "react-materialize";
import ListItems from "../../src/components/ListItem";
import ListAPI from "../utilities/ListAPI";

class UserLists extends Component {
  constructor(props) {
    super(props);
    this.state = {
      lists: []
    };
  }

  componentDidMount() {
    const { id } = this.props.state;
    ListAPI.getLists(id)
      .then(lists =>
        this.setState({
          lists: lists.data
        })
      )
      .catch(err => console.log(err));
  }

  render() {
    console.log(
      `there are ${this.state.lists.length} lists and they are:`,
      this.state.lists
    );

    const listDivs = this.state.lists.map((item, index) => (
      <li key={index}>
        <h4>{item.name}</h4>
        <ListItems listId={item.id} />
      </li>
    ));

    return (
      <Col s={12}>
        <ul>{listDivs}</ul>
      </Col>
    );
  }
}

export default UserLists;
