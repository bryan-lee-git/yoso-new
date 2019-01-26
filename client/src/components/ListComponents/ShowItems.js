import React, { Component } from "react";
import { Card, Row, Col, Table, Icon } from "react-materialize";
import ItemAPI from "../../utilities/ItemAPI";

class ShowItems extends Component {

  state = {
    items: []
  };

  getItems = () => {
    ItemAPI.getItems(this.props.listId).then(res => {
      this.setState({ items: res.data });
    });
  }

  componentDidMount() {
    this.getItems();
  }

  render() {
    return (
      <div>
        <Row>
          <Col s={12}>
            <Card className="rounded">
              <Row>
                <h2>{this.props.name}</h2>
                {this.state.items.length > 0 ? (
                  <Table className="striped highlight centered responsive-table">
                    <thead>
                      <tr>
                        <th>Name</th>
                        <th>Unit Size</th>
                        <th>Measurement</th>
                        <th>Quantity</th>
                        <th>Notes</th>
                        <th>Remove</th>
                      </tr>
                    </thead>
                    <tbody>
                      {this.state.items.map((item, index) => (
                        <tr key={item.id}>
                          <td>{item.name}</td>
                          <td>{item.unitSize}</td>
                          <td>{item.measurement}</td>
                          <td>{item.quantity}</td>
                          <td>{item.notes}</td>
                          <td onClick={e => {this.props.handleDeleteItem(e, this.props.listId, item.id, this.getItems)}}>
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
