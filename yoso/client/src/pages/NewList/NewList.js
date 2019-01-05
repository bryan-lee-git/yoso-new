import React, { Component } from "react";
import {
  Container,
  Row,
  Col,
  Autocomplete,
  Input,
  Button
} from "react-materialize";
import ListAPI from "../../utilities/ListAPI";
import ItemAPI from "../../utilities/ItemAPI";

import { MyContext } from "../../App";

export default class NewList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      item: "",
      items: []
    };
  }
  handleChange = e => {
    e.preventDefault();
    const { name, value } = e.target;
    const capName = value.replace(
      value.charAt(0),
      value.charAt(0).toUpperCase()
    );
    this.setState({
      [name]: capName
    });
  };
  handleNewItem = e => {
    e.preventDefault();
    this.setState({
      items: this.state.items.concat(this.state.item),
      item: ""
    });
  };
  createList = (e, id, data) => {
    e.preventDefault();

    console.log(
      `here's the data object coming into the createList method: `,
      data
    );
    const itemsArray = [];
    data.items.forEach(element => {
      const item = { name: element };
      itemsArray.push(item);
    });
    const datapack = {
      name: data.name,
      items: itemsArray
    };

    ListAPI.createListWithItems(id, datapack).then(response => {
      console.log(
        `here's the response after creating list with items: `,
        response
      );
    });
  };
  render() {
    const list = this.state.items.map((item, index) => (
      <li key={index}>
        <h3 className="white-text fade-in">{item}</h3>
      </li>
    ));
    return (
      <MyContext.Consumer>
        {({ state }) => (
          <div className="center-align">
            <Row>
              <Col s={12}>
                <h1 className="white-text fade-in">
                  {!this.state.name ? "Enter a new name" : this.state.name}
                </h1>
              </Col>
            </Row>
            <Row>
              <Col s={6} offset="5">
                <Input
                  className="white-text fade-in"
                  s={12}
                  placeholder="Enter your list's name here"
                  label="List Name"
                  name="name"
                  value={this.state.name}
                  onChange={this.handleChange}
                />
              </Col>
            </Row>
            <Row>
              <h2 className="white-text fade-in">Items </h2>
            </Row>
            <Row>
              <Col s={6}>
                <Input
                  className="white-text fade-in"
                  s={12}
                  placeholder="Enter a new item"
                  label="New Item"
                  name="item"
                  value={this.state.item}
                  onChange={this.handleChange}
                />
              </Col>
              <Col s={6}>
                <Button className="btn" onClick={this.handleNewItem}>
                  Add
                </Button>
              </Col>
            </Row>

            <Row>
              <ul>{list}</ul>
            </Row>

            <Row>
              <Button
                className="btn"
                onClick={e => this.createList(e, state.id, this.state)}
              >
                Submit
              </Button>
            </Row>
          </div>
        )}
      </MyContext.Consumer>
    );
  }
}
