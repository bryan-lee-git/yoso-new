import React, { Component } from "react";
import WasteTable from "../WasteComponents/WasteTable";
import { Modal, Button, Input } from "react-materialize";
import PantryAPI from "../../utilities/PantryAPI";

export default class WasteSimData extends Component {
  constructor(props) {
    super(props);

    this.state = {
      UserId: this.props.UserId
    };
  }

  componentDidMount() {
    this.props.buildPantry();
  }

  render() {
    return (
      <React.Fragment>
        <WasteTable
          pantry={this.props.pantry}
          purchases={this.props.purchases}
          handleDelete={this.props.handleDelete}
          handlePantryUpdate={this.props.handlePantryUpdate}
          getPantry={this.props.getPantry}
        />
      </React.Fragment>
    );
  }
}
