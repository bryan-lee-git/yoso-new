import React, { Component } from "react";
import {
  Card,
  Container,
  Row,
  Col,
  Autocomplete,
  Input,
  Button,
  Table,
  Icon
} from "react-materialize";
import ListAPI from "../../utilities/ListAPI";
import ItemAPI from "../../utilities/ItemAPI";

import { MyContext } from "../../App";

export default class NewList extends Component {

  state = {
    items: []
  };

  handleChange = e => {
    e.preventDefault();
    const { name, value } = e.target;
    const capName = value.replace(
      value.charAt(0),
      value.charAt(0).toUpperCase()
    );
    this.setState({ [name]: capName });
  };

  handleNewItem = e => {
    e.preventDefault();
    const newItem = { name: this.state.name, unitSize: this.state.unitSize, quantity: this.state.quantity };
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
    console.log(id);
    ListAPI.createList(id, {name: this.state.listName}).then(response => {
      this.state.items.forEach(item => {
        item.ListId = response.data.id;
        ItemAPI.createItem(item).then(response => {
          console.log(response);
        });
      });
    });
  };

  render() {
    return (
      <MyContext.Consumer>
        {(context => {
          return (
            <Container className="center-align">
              <Row>
                <Col s={12}>
                  <h1 className="white-text fade-in">
                    {!this.state.listName ? "Enter Your List Name" : this.state.listName}
                  </h1>
                </Col>
              </Row>
              <Row>
                <Col s={4}>
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
                <Col s={8}>
                  <Card className="z-depth-5 animate-up-2 list-card">
                      <Input
                        s={3}
                        placeholder="Item Name"
                        label="New Item"
                        name="name"
                        onChange={this.handleChange}
                      />
                      <Input
                        s={3}
                        placeholder="Enter Unit Size"
                        label="Unit Size"
                        name="unitSize"
                        onChange={this.handleChange}
                      />
                      <Input
                        s={3}
                        placeholder="Enter Quantity"
                        label="Quantity"
                        name="quantity"
                        onChange={this.handleChange}
                      />
                      <Button s={3} className="btn btn-large" onClick={this.handleNewItem}>Add Item</Button>
                  </Card>
                </Col>
              </Row>
              <Row>
                <Col s={12}>
                  <Card className="animate-up-3">
                    <Row>
                      <h2>Your List</h2>
                      {this.state.items.length > 0
                        ?
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
                                <td onClick={this.handleRemoveItem}><Icon data-index={index}>delete_forever</Icon></td>
                              </tr>
                            ))}
                          </tbody>
                        </Table>
                        :
                        <div>No Items Added to Your List Yet</div>
                      }
                    </Row>
                  </Card>
                </Col>
              </Row>
              <Row>
                <Button id="save-list" className="btn btn-large animate-up-4" onClick={e => this.createList(e, context.state.id)}>Save List</Button>
              </Row>
            </Container>
          )
        })}
      </MyContext.Consumer>
    );
  }
}
