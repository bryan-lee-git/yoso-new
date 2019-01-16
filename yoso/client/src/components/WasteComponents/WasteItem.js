import React, { Component } from "react";
import { Col, Card, Row, Button, Modal, Input } from "react-materialize";

import Moment from "react-moment";

import BuildPantry from "../../utilities/YOSOSimulator.js/BuildPantry";
import { categories } from "../../utilities/ItemTerms";
import PantryAPI from "../../utilities/PantryAPI";
import random from "../../utilities/YOSOSimulator.js/Random";
import WasteTable from "./WasteTable";

//import "moment-timezone";

class WasteItem extends Component {
  state = {
    UserId: this.props.context.user.id,
    build: false,
    sort: "frequency",
    pantry: [],
    purchases: [
      {
        id: 1,
        createdAt: 0,
        quantity: 3,
        unitSize: "dozen",
        weightMeasure: "ounces",
        sizeQuantity: 24,
        expiration: 0,
        unitPrice: 1.49,
        location: "Smiths",
        pantryId: 1
      }
    ]
  };
  componentDidMount() {
    this.setState({ UserId: this.props.context.user.id });
    this.buildPantry();
  }
  launchBuildPantry = e => {
    e.preventDefault();
    this.setState({
      build: true
    });
  };
  buildPantry = () => {
    let chosen = [];

    PantryAPI.getPantry(this.state.UserId, "frequency").then(response => {
      console.log(`response for build pantry in wastItem is `, response);
      if (response.data.length > 0) {
        this.setState({
          pantry: response.data
        });
      } else {
        categories.forEach((category, index) => {
          for (let i = 0; i < category.length; i++) {
            const target = random(category.length);
            if (chosen.includes(target)) {
              console.log(`already got it`);
            } else {
              chosen.push(target);
              PantryAPI.findOrCreatePantryItem(
                BuildPantry(category, index, target, this.state.UserId)
              ).then(response =>
                PantryAPI.getPantry(this.state.UserId).then(response =>
                  this.setState({
                    pantry: response.data
                  })
                )
              );
            }
          }
        });
      }
    });
  };

  handleSort = e => {
    e.preventDefault();

    const { name, value } = e.target;
    console.log(
      `inside handle sort, here's name: ${name} and value: ${value} `
    );
    this.setState({
      [name]: value
    });
  };
  handleChange = e => {
    this.setState({
      updateValue: e.target.value
    });
  };
  handleSubmit = (e, id) => {
    e.preventDefault();
    let value = this.state.updateValue;
    if (this.state.label === "frequency" || this.state.label === "shelfLife") {
      value = parseInt(value);
    }
    const data = {
      [this.state.label]: value
    };

    console.log(
      `inside handle submit, here's what we're sending to the db: req.params.id: ${id} and req.body: `,
      data
    );

    PantryAPI.updatePantryItem(id, data).then(response =>
      console.log(response)
    );

    this.handleModal(e);
  };
  handleModal = e => {
    e.preventDefault();
    this.setState({
      update: !this.state.update
    });
  };
  getPantry = () => {
    const { id } = this.props.context.user;
    const sort = this.state.sort;
    console.log(
      `in get pantry inside wasteitem, here's sort: ${sort} and here's the UserId: ${id}`
    );

    PantryAPI.getPantry(id, this.state.sort).then(response =>
      this.setState({
        pantry: response.data
      })
    );
  };
  handleDelete = (e, id, cb) => {
    e.preventDefault();
    console.log(
      `inside handle delete method of waste item. here's the id to delete: `,
      id
    );

    PantryAPI.deletePantryItem(id).then(response => cb());
  };
  handlePantryUpdate = (e, columnName, pantryInfo) => {
    e.preventDefault();
    console.log(`inside the handlePantryUpdate method`);
    const { id, name } = pantryInfo;
    let value = this.props.pantry
      .filter(item => item.id === id)
      .map(result => result[columnName]);
    console.log(`here's the value to update: ${value}`);
    this.setState({
      update: true,
      label: columnName,
      pantryIdToUpdate: id,
      pantryNameToUpdate: name,
      valueToUpdate: value
    });
  };

  render() {
    const date = new Date();
    const { user } = this.props.context;
    console.log(`inside wasteitem, here's the context: `, user);
    return (
      <React.Fragment>
        <Row>
          <Col s={4} offset="3">
            <Card className="z-depth-3">
              <h4>{user.first.toUpperCase()}'S WASTE</h4>
            </Card>
            <Card>
              <h5>ITEMS</h5>
            </Card>
          </Col>
          <Col s={8}>
            <Card className="z-depth-3">
              <h4>WASTE SIMULATOR</h4>
              <h5>
                <Moment format="MM-DD-YYYY">{date}</Moment>
                <br />
                <Moment format="MM-DD-YYYY" subtract={{ days: 365 }}>
                  {date}
                </Moment>
              </h5>
            </Card>
            {this.state.build ? (
              <WasteTable
                pantry={this.state.pantry}
                purchases={this.state.purchases}
                handleDelete={this.handleDelete}
                handlePantryUpdate={this.handlePantryUpdate}
                buildPantry={this.buildPantry}
                getPantry={this.getPantry}
              />
            ) : (
              <Button className="btn" onClick={this.launchBuildPantry}>
                CLICK HERE TO BUILD YOUR PANTRY
              </Button>
            )}
          </Col>
        </Row>
        <Modal
          id="pop-up-input"
          header={`Update ${this.state.label} for ${
            this.state.pantryNameToUpdate
          }`}
          open={this.state.update}
          actions={
            <Button className="btn" onClick={this.props.handleModal}>
              Nevermind
            </Button>
          }
        >
          {this.state.label === "stock" ? (
            <Input
              s={12}
              value={this.state.updateValue}
              label={this.state.label}
              type="select"
              onChange={this.handleChange}
            >
              <option value="ENOUGH">ENOUGH</option>
              <option value="LOW">LOW</option>
              <option value="OUT">OUT</option>
            </Input>
          ) : (
            <Input
              s={12}
              value={this.state.updateValue}
              placeholder={this.state.valueToUpdate}
              label={this.state.label}
              name="listName"
              onChange={this.handleChange}
            />
          )}

          <Button
            className="btn"
            onClick={e => this.handleSubmit(e, this.state.pantryIdToUpdate)}
          >
            Save
          </Button>
        </Modal>
      </React.Fragment>
    );
  }
}

export default WasteItem;
