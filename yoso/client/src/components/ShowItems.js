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
import ItemAPI from "../utilities/ItemAPI";

class ShowItems extends Component {
  constructor() {
    super();
    this.state = {
      list: []
    };
  }

  componentDidMount() {
    ItemAPI.getItems(this.props.currentList.id).then(res =>
      this.setState({
        list: res.data
      })
    );
  }

  handleRemoveItem = event => {
    const index = event.target.dataset.index;
    const newItems = this.state.items;
    newItems.splice(index, 1);
    this.setState({ items: newItems });
  };
  render() {
    console.log(`inside showitems, here's props: `, this.props.currentList.id);

    return (
      <div>
        <Row>
          <Col s={12}>
            <Card className="animate-up-3">
              <Row>
                <h2>{this.props.currentList.name}</h2>
                {this.state.list.length > 0 ? (
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
                      {this.state.list.map((item, index) => (
                        <tr key={index}>
                          <td>{item.name}</td>
                          <td>{item.unitSize}</td>
                          <td>{item.quantity}</td>
                          <td onClick={this.handleRemoveItem}>
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
        </Row>
      </div>
    );
  }
}

export default ShowItems;
