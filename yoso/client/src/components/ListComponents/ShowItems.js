import React, { Component } from "react";
import { Card, Row, Col, Table, Icon } from "react-materialize";
import ItemAPI from "../../utilities/ItemAPI";

class ShowItems extends Component {
  state = {
    items: []
  };
  componentDidMount() {
    ItemAPI.getItems(this.props.listId).then(res => {
      console.log(`From getlists at userLists, here's the user's items: `, res);
      this.setState({ items: res.data });
    });
  }
  render() {
    console.log(`inside show items, here's this: `, this);
    console.log(`inside show items, here's the props: `, this.props);
    return (
      <div>
        <Row>
          <Col s={12}>
            <Card className="animate-up-3 z-depth-5">
              <Row>
                <h2>{this.props.name}</h2>
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
                        <tr key={item.id}>
                          <td>{item.name}</td>
                          <td>{item.unitSize}</td>
                          <td>{item.quantity}</td>
                          <td onClick={this.props.onClick}>
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
