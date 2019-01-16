import React, {Component} from 'react';
import ItemAPI from "../../utilities/ItemAPI";
import PageHeader from "../PageHeader"
import BackBtn from "../BackBtn";

import {
  Card,
  Row,
  Table,
  Button
} from "react-materialize";

export default class ShoppingList extends Component {

    state = {}

    getItems = id => {
        ItemAPI.getItems(id).then(res => {
          this.setState({
            items: res.data
          });
        });
    }

    toggleStrikethrough = index => {
      const listItems = this.state.items;
      listItems[index].purchased ? listItems[index].purchased = false : listItems[index].purchased = true;
      this.setState({items: listItems});
    }

    componentDidMount = () => {
      this.getItems(this.props.list);
    } 

    render() {
        return(
          <div className="center-align">
            <PageHeader>GO SHOPPING</PageHeader>
            <BackBtn goto="/lists" page={2} handleSwitch={this.props.handleSwitch} />
            <Card className="z-depth-5 rounded animate-up">
              <h4>Click Item to Check Off List</h4>
              <Row>
                {this.state.items ? (
                  <Table className="striped highlight centered">
                    <thead>
                      <tr>
                        <th>Name</th>
                        <th>Size</th>
                        <th>Quantity</th>
                      </tr>
                    </thead>
                    <tbody>
                      {this.state.items.map((item, index) => (
                        <tr className={item.purchased ? "strikethrough" : ""} onClick={() => this.toggleStrikethrough(index)} key={index}>
                          <td>{item.name}</td>
                          <td>{item.unitSize}</td>
                          <td>{item.quantity}</td>
                        </tr>
                      ))}
                    </tbody>
                  </Table>
                ) : (
                  <h2>No Items In This List</h2>
                )}
              </Row>
            </Card>
            <Button className="done-btn animate-up-5">DONE</Button>
          </div>
        )
    }
}