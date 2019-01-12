import React, { Component } from "react";
import { Redirect } from "react-router-dom";
import {
  Card,
  Container,
  Row,
  Col,
  Autocomplete,
  Input,
  Button,
  Icon,
  Table
} from "react-materialize";
import ListAPI from "../../utilities/ListAPI";
import ItemAPI from "../../utilities/ItemAPI";
import { terms } from "../../utilities/ItemTerms";
import BackBtn from "../BackBtn";

export default class NewList extends Component {
  state = { items: [], terms: terms, redirect: false };

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
    this.setState({ name: capName });
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
    ListAPI.createList(id, {
      name: this.state.listName
    }).then(response => {
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

      this.props.handleSwitch(e, 2);
    });
  };

  handleRedirect = () => {
    this.setState({ redirect: true });
  };

  render() {
    if (this.state.redirect) {
      return <Redirect to={`/lists`} />;
    }
    return (
      <Container className="center-align">
        <Row>
          <Col s={12}>
            <h1 className="white-text fade-in">
              {!this.state.listName ? "New List" : this.state.listName}
            </h1>
          </Col>
        </Row>
        <BackBtn
          goto="/lists"
          handleSwitch={this.props.handleSwitch}
          page={0}
        />
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
                placeholder="Name"
                onAutocomplete={
                  this.handleAutocomplete //label="New Item"
                }
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
        <Col s={12}>
          <Card className="animate-up-3">
            <Row>
              <h2>{this.state.items.name}</h2>
              {this.state.items.length > 0 ? (
                <Table className="striped highlight centered">
                  <thead>
                    <tr>
                      <th>Name</th>
                      <th>Size</th>
                      <th>Quantity</th>
                      <th>Remove Item</th>
                    </tr>
                  </thead>
                  <tbody>
                    {this.state.items.map((item, index) => (
                      <tr key={index}>
                        <td>{item.name}</td>
                        <td>{item.unitSize}</td>
                        <td>{item.quantity}</td>
                        <td onClick={this.state.handleRemoveItem}>
                          <Icon data-index={index}>delete_forever</Icon>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </Table>
              ) : (
                <div>No Items Added to Your List Yet</div>
              )}
            </Row>
          </Card>
        </Col>

        <Row className="btn-row">
          <Button
            id="save-list"
            className="btn btn-large animate-up-4"
            onClick={e => this.createList(e, this.props.context.id)}
          >
            Save List
          </Button>
        </Row>
      </Container>
    );
  }
}
