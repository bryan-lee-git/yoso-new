import React, { Component } from "react";
import { Card, Row, Col } from "react-materialize";
import ListItems from "../../src/components/ListItem";
import ListAPI from "../utilities/ListAPI";
import ItemAPI from "../utilities/ItemAPI";
import PantryAPI from "../utilities/PantryAPI";
import ItemSearch from "../components/ItemSearch";

class UserLists extends Component {
  constructor(props) {
    super(props);
    this.state = {
      lists: [],
      items: [],
      listId: 0,
      id: 0,
      item: ""
    };
  }

  componentDidMount() {
    this.getLists(this.getListItems);
  }

  getLists = () => {
    const { id } = this.props.state;
    ListAPI.getLists(id)
      .then(lists =>
        this.setState({
          lists: lists.data
        })
      )
      .catch(err => console.log(err));
  };

  getListItems = listId => {
    console.log(`here's the list to search for: `, listId);
    ItemAPI.getItems(listId).then(items =>
      this.setState({
        listId: listId,
        items: items.data
      })
    );
  };

  handleChange = e => {
    e.preventDefault();
    const { value, name } = e.target;
    this.setState({
      [name]: value
    });
  };

  handleSubmit = (e, listId, data) => {
    e.preventDefault();
    ItemAPI.createItem(listId, data).then(res =>
      console.log(`Here's the response from the db: `, res)
    );
  };

  render() {
    console.log(
      `there are ${this.state.lists.length} lists and they are:`,
      this.state.lists
    );

    const listDivs = this.state.lists.map((item, index) => (
      <li key={index}>
        <h4>{item.name}</h4>
        <ItemSearch
          search={this.state.item}
          listId={item.id}
          onChange={this.handleChange}
          onSubmit={this.handleSubmit}
        />
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
