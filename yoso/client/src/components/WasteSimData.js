import React, { Component } from "react";
import { Card } from "react-materialize";
import BuildPantry from "../utilities/YOSOSimulator.js/BuildPantry";
import { categories } from "../utilities/ItemTerms";
import PantryAPI from "../utilities/PantryAPI";

export default class WasteSimData extends Component {
  constructor(props) {
    super(props);
    console.log(
      `inside constructor of wastesimdata, here's props: `,
      this.props
    );
    this.state = {
      UserId: this.props.UserId,
      pantry: []
    };
  }

  componentDidMount() {
    categories.forEach((category, index) => {
      let size = Math.floor(category.length * 0.4);
      console.log(`size is ${size}`);
      for (let i = 0; i < size; i++) {
        PantryAPI.findOrCreatePantryItem(
          BuildPantry(category, index, this.state.UserId)
        ).then(response =>
          this.setState({
            pantry: [...this.state.pantry, response.data[0]]
          })
        );
      }
    });
  }
  render() {
    const pantry = this.state.pantry.map(item => (
      <li key={item.id} className="collection-item">
        {item.name}
      </li>
    ));
    return (
      <Card className="z-depth-3">
        <h5>DATA</h5>
        <ul className="collection">{pantry}</ul>
      </Card>
    );
  }
}
