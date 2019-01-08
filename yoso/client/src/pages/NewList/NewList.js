import React, { Component } from "react";
import { Link } from "react-router-dom";
import {
  Card,
  Container,
  Row,
  Col,
  Autocomplete,
  Input,
  Button,
  Icon
} from "react-materialize";
import ListAPI from "../../utilities/ListAPI";
import ItemAPI from "../../utilities/ItemAPI";
import { terms } from "../../utilities/ItemTerms";
import ShowItems from "../../components/ShowItems";
import { MyContext } from "../../App";

export default class NewList extends Component {
  state = {
    items: [],
    terms: terms
  };

  handleChange = e => {
    e.preventDefault();

    const { name, value } = e.target;
    console.log(`inside handleChange, name: ${name} and value: ${value}`);
    if (value) {
      const capName = value.replace(
        value.charAt(0),
        value.charAt(0).toUpperCase()
      );
      this.setState({ [name]: capName });
    }
  };
  handleAutocomplete = value => {
    console.log(`inside handleAutocomplete, value: ${value}`);
    const capName = value.replace(
      value.charAt(0),
      value.charAt(0).toUpperCase()
    );
    this.setState({
      name: capName
    });
  };

  handleNewItem = e => {
    e.preventDefault();

    const newItem = {
      name: this.state.name,
      unitSize: this.state.unitSize,
      quantity: this.state.quantity
    };
    const newItems = [...this.state.items, newItem];
    this.setState({ items: newItems });
  };

  handleRemoveItem = event => {
    const index = event.target.dataset.index;
    const newItems = this.state.items;
    newItems.splice(index, 1);
    this.setState({ items: newItems });
  };

  createList = (e, id) => {
    e.preventDefault();
    console.log(`userid going to db is ${id}`);
    ListAPI.createList(id, { name: this.state.listName }).then(response => {
      console.log(`response data is: `, response.data);
      this.state.items.forEach(item => {
        item.ListId = response.data.id;
        this.setState({
          listId: response.data.id
        });
        ItemAPI.createItem(item).then(response => {
          console.log(response);
        });
      });
    });
  };

  render() {
    return (
      <MyContext.Consumer>
        {context => {
          return (
            <Container className="center-align">
              <Row>
                <Col s={3}>
                  <Link to="/lists">
                    <br />
                    <br />
                    <br />
                    <Button>
                      <Icon>arrow_back</Icon>
                    </Button>
                  </Link>
                </Col>
                <Col s={12}>
                  <h1 className="white-text fade-in">
                    {!this.state.listName ? "New List" : this.state.listName}
                  </h1>
                </Col>
              </Row>
              <Row>
                <Col s={12} l={4}>
                  <Card className="z-depth-5 animate-up list-card">
                    <Input
                      s={12}
                      placeholder="Enter list name here"
                      label="List Name"
                      name="listName"
                      onChange={this.handleChange}
                    />
                  </Card>
                </Col>
                <Col s={12} l={8}>
                  <Card
                    id="new-item-input"
                    className="z-depth-5 animate-up-2 list-card"
                  >
                    <Autocomplete
                      s={4}
                      l={3}
                      data={this.state.terms}
                      placeholder="Name" //label="New Item"
                      onAutocomplete={this.handleAutocomplete}
                      name="name"
                      onChange={this.handleChange}
                    />
                    <Input
                      s={4}
                      l={3}
                      placeholder="Unit Size"
                      label="Unit Size"
                      name="unitSize"
                      onChange={this.handleChange}
                    />
                    <Input
                      s={4}
                      l={3}
                      placeholder="Quantity"
                      label="Quantity"
                      name="quantity"
                      onChange={this.handleChange}
                    />
                    <Button
                      s={12}
                      l={3}
                      className="btn btn-large"
                      onClick={this.handleNewItem}
                    >
                      Add Item
                    </Button>
                  </Card>
                </Col>
              </Row>
              <ShowItems
                currentList={this.state.items}
                name={this.state.listName}
                onClick={this.handleRemoveItem}
              />

              <Row className="btn-row">
                <Button
                  id="save-list"
                  className="btn btn-large animate-up-4"
                  onClick={e => this.createList(e, context.state.id)}
                >
                  Save List
                </Button>
              </Row>
            </Container>
          );
        }}
      </MyContext.Consumer>
    );
  }
}
